// src/components/CTASection.jsx
import { ArrowRight, Download } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-[var(--color-ink)] py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Stop researching. Start building.
        </h2>
        <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto">
          Book a free demo class, meet your future trainer, and see exactly how the next
          6 months of your career could look.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-gold)] text-[var(--color-ink)] font-semibold hover:brightness-95 transition-all"
          >
            Enroll Now <ArrowRight size={18} />
          </a>
          <a
            href="/brochure.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
          >
            <Download size={18} /> Download Brochure
          </a>
        </div>

        <p className="mt-6 text-xs text-white/40">
          No spam. No pressure. Just a real conversation about your goals.
        </p>
      </div>
    </section>
  );
}