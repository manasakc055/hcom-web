"use client";

import { FormEvent, useId, useState } from "react";

interface EarlyAccessDialogProps {
  triggerClassName?: string;
  rippleClassName?: string;
  outlineClassName?: string;
}

export function EarlyAccessDialog({
  triggerClassName,
  rippleClassName,
  outlineClassName,
}: EarlyAccessDialogProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const titleId = useId();
  const descriptionId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 250);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        Early access
        <span className={outlineClassName} />
        <span className={rippleClassName} />
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 p-8 text-slate-100 shadow-[0_40px_120px_-20px_rgba(15,23,42,0.65)]">
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/60 to-transparent" />
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white/70 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
              aria-label="Close early access form"
            >
              ×
            </button>
            <div className="space-y-3">
              <p id={titleId} className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]">
                Join the waitlist
              </p>
              <h3 className="text-2xl font-semibold text-white">Request Early Access</h3>
              <p id={descriptionId} className="text-sm text-slate-300">
                Tell us about your team and we&apos;ll reach out with a tailored onboarding session once new seats open up.
              </p>
            </div>
            {submitted ? (
              <div className="mt-8 space-y-6 rounded-2xl bg-slate-800/60 p-6 text-sm text-slate-200">
                <p className="text-base font-semibold text-white">Thank you for your interest!</p>
                <p>
                  Our team will review your request and get in touch shortly with next steps. We can&apos;t wait to show you what
                  HCOM can unlock for your commerce stack.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Close
                </button>
              </div>
            ) : (
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-white/80">
                    Full name
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Avery Kim"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#7C5CFF] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40"
                    />
                  </label>
                  <label className="text-sm font-medium text-white/80">
                    Work email
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="avery@company.com"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#7C5CFF] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-medium text-white/80">
                    Company
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="Nova Collective"
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#7C5CFF] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40"
                    />
                  </label>
                  <label className="text-sm font-medium text-white/80">
                    Team size
                    <select
                      name="team-size"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white focus:border-[#7C5CFF] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40"
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="1-5">1 – 5</option>
                      <option value="6-15">6 – 15</option>
                      <option value="16-50">16 – 50</option>
                      <option value="51-200">51 – 200</option>
                      <option value="200+">200+</option>
                    </select>
                  </label>
                </div>
                <label className="text-sm font-medium text-white/80">
                  What are you hoping to solve with HCOM?
                  <textarea
                    name="goals"
                    rows={4}
                    placeholder="Share the biggest challenges in your commerce workflow..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-[#7C5CFF] focus:outline-none focus:ring-2 focus:ring-[#7C5CFF]/40"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#00C6FF] via-[#2D3FE0] to-[#7C5CFF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:-translate-y-[2px]"
                >
                  Submit request
                </button>
              </form>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}