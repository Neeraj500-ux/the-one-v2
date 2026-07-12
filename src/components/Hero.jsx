// src/components/Hero.jsx
import { ArrowRight, PlayCircle } from "lucide-react";

const steps = [
  { number: "01", label: "Learn" },
  { number: "02", label: "Build" },
  { number: "03", label: "Get Hired" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-paper)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-paper-alt)] border border-[var(--color-border)] text-xs font-semibold tracking-wide text-[var(--color-teal)] uppercase mb-6">
            Trusted by 12,000+ students since 2016
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] text-[var(--color-ink)]">
            Your career doesn't wait.
            <br />
            Neither should <span className="text-[var(--color-gold)]">you.</span>
          </h1>

          <p className="mt-6 text-lg text-[var(--color-slate)] max-w-xl leading-relaxed">
            Ascend Institute of Technology trains students in the skills companies are
            actually hiring for — through live projects, mentor-led classes, and a
            placement cell that works until you're placed, not until the course ends.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-white font-semibold hover:bg-[var(--color-ink-soft)] transition-colors"
            >
              Explore Courses <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--color-ink)]/20 text-[var(--color-ink)] font-semibold hover:bg-[var(--color-paper-alt)] transition-colors"
            >
              <PlayCircle size={18} /> Book a Free Demo
            </a>
          </div>

          {/* Signature: progress rail */}
          <div className="mt-14 flex items-center">
            {steps.map((step, i) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-start">
                  <span className="font-mono-num text-xs text-[var(--color-gold)]">
                    {step.number}
                  </span>
                  <span className="font-display text-sm font-semibold text-[var(--color-ink)]">
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-12 sm:w-20 h-px bg-[var(--color-border)] mx-4 relative top-2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual panel */}
        <div className="relative">
          <div className="rounded-3xl bg-[var(--color-ink)] p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[var(--color-gold)]/20 blur-2xl" />
            <p className="text-white/60 text-sm font-mono-num mb-6">// live_batch_status.json</p>

            <div className="space-y-4">
              {[
                { label: "Students placed this year", value: "2,340+" },
                { label: "Average placement time", value: "45 days" },
                { label: "Hiring partners", value: "180+" },
                { label: "Courses running live now", value: "38" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span className="text-white/70 text-sm">{item.label}</span>
                  <span className="font-mono-num text-[var(--color-gold)] font-semibold text-lg">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/placements"
              className="mt-8 inline-flex items-center gap-2 text-sm text-white font-semibold hover:text-[var(--color-gold)] transition-colors"
            >
              See full placement report <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}