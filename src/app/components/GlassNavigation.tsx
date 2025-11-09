'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type NavItem = {
  name: string;
  href: string;
};

type GlassNavigationProps = {
  navigation: NavItem[];
};

export function GlassNavigation({ navigation }: GlassNavigationProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeHref, setActiveHref] = useState(() => navigation[0]?.href ?? '#');
  const activeHrefRef = useRef(activeHref);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [logoPulse, setLogoPulse] = useState(false);

  const sectionIds = useMemo(
    () =>
      navigation
        .map((item) => item.href.replace('#', ''))
        .filter((id) => id && id !== 'top'),
    [navigation],
  );

  useEffect(() => {
    activeHrefRef.current = activeHref;
    setLogoPulse(true);
    const timeout = window.setTimeout(() => setLogoPulse(false), 900);
    return () => window.clearTimeout(timeout);
  }, [activeHref]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const href = `#${id}`;
          if (href !== activeHrefRef.current) {
            setActiveHref(href);
          }
        }
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds]);

  useEffect(() => {
    const updateIndicator = () => {
      const container = navRef.current;
      if (!container) return;

      const activeLink = container.querySelector<HTMLAnchorElement>(`a[data-href="${activeHref}"]`);
      if (!activeLink) {
        setIndicator({ left: 0, width: 0 });
        return;
      }

      const containerRect = container.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setIndicator({ left: linkRect.left - containerRect.left, width: linkRect.width });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeHref]);

  const handleClick = (href: string) => {
    setActiveHref(href);
  };

  return (
    <div className="glass-surface flex items-center justify-between gap-6 rounded-3xl px-6 py-4">
      <a className="group flex items-center gap-3" href="#top">
        <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D3FE0] to-[#7C5CFF] text-white font-semibold shadow-lg shadow-indigo-500/40">
          <span className="absolute inset-0 rounded-2xl border border-white/10" />
          <span
            className={`absolute inset-[-3px] rounded-[22px] bg-gradient-to-r from-[#00C6FF]/0 via-[#00C6FF]/40 to-[#7C5CFF]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${logoPulse ? 'animate-logo-orbit' : ''}`}
          />
          <span className="relative">H</span>
        </span>
        <span className="text-lg font-semibold tracking-tight text-slate-900">HCOM</span>
      </a>
      <div ref={navRef} className="relative hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
        <span
          className="pointer-events-none absolute -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF] transition-all duration-500"
          style={{ width: indicator.width, transform: `translateX(${indicator.left}px)` }}
        />
        {navigation.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <a
              key={item.name}
              data-href={item.href}
              className={`group relative transition-colors ${isActive ? 'text-slate-900' : 'hover:text-slate-900'}`}
              href={item.href}
              onClick={() => handleClick(item.href)}
            >
              <span className="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-[#00C6FF] to-[#7C5CFF] transition-transform duration-300 group-hover:scale-x-100" />
              {item.name}
            </a>
          );
        })}
      </div>
      <a
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30"
        href="#cta"
      >
        Try HCOM
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        <span
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.55), transparent 65%)' }}
        />
      </a>
    </div>
  );
}