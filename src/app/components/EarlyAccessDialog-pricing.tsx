"use client";

import { FormEvent, useId, useState, useEffect } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false); // IMPORTANT for SSR Safety
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => setSubmitted(false), 250);
  };

  // Prevent rendering portal before hydration
  if (!mounted) return null;

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
      >
        Request Early access
        <span className={outlineClassName} />
        <span className={rippleClassName} />
      </button>

      {/* PORTAL STARTS HERE */}
      {open &&
        createPortal(
          <div
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center 
              bg-slate-950/40 backdrop-blur-sm 
              px-4 py-10
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
          >
            {/* Modal Content */}
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-slate-200/50 bg-white p-8 text-slate-800 shadow-[0_40px_120px_-20px_rgba(15,23,42,0.25)]">
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7C5CFF]/40 to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/50 bg-white text-sm font-medium text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-700"
                aria-label="Close early access form"
              >
                ×
              </button>

              {/* Header */}
              <div className="space-y-3">
                <p
                  id={titleId}
                  className="text-sm font-semibold uppercase tracking-[0.35em] text-[#7C5CFF]"
                >
                  {/* Join the waitlist */}
                </p>
                <h3 className="text-2xl font-semibold text-slate-900">
                  Request Early Access
                </h3>
                <p
                  id={descriptionId}
                  className="text-sm text-slate-600 leading-relaxed"
                >
                  Tell us about your team and we’ll reach out with a tailored
                  onboarding session once new seats open up.
                </p>
              </div>

              {/* Submitted State */}
              {submitted ? (
                <div className="mt-8 space-y-6 rounded-2xl bg-slate-50 p-6 text-sm text-slate-700 border border-slate-200">
                  <p className="text-base font-semibold text-slate-900">
                    🎉 Thank you for your interest!
                  </p>
                  <p>
                    Our team will review your request and get in touch shortly
                    with next steps.
                  </p>
                  <button
                    type="button"
                    onClick={close}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D3FE0] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e2fbf]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  
                  {/* Inputs */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm text-start font-medium text-slate-700">
                      Full name
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Avery Kim"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm
                          text-slate-900 placeholder:text-slate-400 focus:border-black focus:ring-2 focus:ring-black/40"
                      />
                    </label>

                    <label className="text-sm text-start font-medium text-slate-700">
                      Work email
                      <input
                        type="email"
                        required
                        placeholder="avery@company.com"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm
                          text-slate-900 placeholder:text-slate-400 focus:border-black focus:ring-2 focus:ring-black/40"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-medium text-slate-700">
                      Mobile number
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="+91"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900
                          placeholder:text-slate-400 focus:border-black focus:ring-2 focus:ring-black/40"
                        onInput={(e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                        }}
                      />
                    </label>

                    <label className="text-sm font-medium text-slate-700">
                      Company
                      <input
                        type="text"
                        required
                        placeholder="Nova Collective"
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm
                          text-slate-900 placeholder:text-slate-400 focus:border-black focus:ring-2 focus:ring-black/40"
                      />
                    </label>
                  </div>

                  <label className="text-sm font-medium text-slate-700">
                    What are you hoping to solve with HCOM?
                    <textarea
                      rows={4}
                      placeholder="Share the biggest challenges in your commerce workflow..."
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 
                        placeholder:text-slate-400 focus:border-black focus:ring-2 focus:ring-black/40"
                    />
                  </label>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-[2px]"
                  >
                    Submit request
                  </button>
                </form>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
