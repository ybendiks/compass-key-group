"use client";

import { useState } from "react";

// Posts to the CKG CRM's intake URL (set NEXT_PUBLIC_CRM_INTAKE_URL in Vercel).
// Without it the form behaves as before.
const INTAKE = process.env.NEXT_PUBLIC_CRM_INTAKE_URL;

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!INTAKE) { setSubmitted(true); return; }
    setSending(true); setFailed(false);
    const f = new FormData(e.currentTarget);
    const res = await fetch(INTAKE, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: f.get("name"), email: f.get("email"), phone: f.get("phone") || undefined,
        interest: f.get("interest") || undefined, message: f.get("message"),
        page_url: window.location.href,
      }),
    }).catch(() => null);
    setSending(false);
    if (res?.ok) setSubmitted(true); else setFailed(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <svg className="w-12 h-12 text-green-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-lg font-bold text-green-800 mb-1">Message Sent!</h3>
        <p className="text-sm text-green-700">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4"
    >
      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors"
            placeholder="(270) 555-0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            I&apos;m Interested In
          </label>
          <select name="interest" className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors bg-white">
            <option value="">Select an option</option>
            <option value="buy">Buying a Home</option>
            <option value="sell">Selling a Home</option>
            <option value="military">Military Relocation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={compact ? 3 : 5}
          className="w-full px-4 py-2.5 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-colors resize-none"
          placeholder="Tell us how we can help..."
        />
      </div>
      {failed && <p className="text-sm text-red-600">Something went wrong sending that. Please try again.</p>}
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-gold hover:bg-gold-light text-white font-semibold py-3 px-6 rounded-md transition-colors"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
