// src/components/Testimonials.jsx
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-[var(--color-paper-alt)] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)]">
            Student Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mt-3">
            They started where you are now.
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 relative border border-[var(--color-border)]">
          <Quote className="text-[var(--color-gold)]/30" size={48} />

          <p className="text-lg sm:text-xl text-[var(--color-ink)] leading-relaxed mt-4 mb-8">
            {current.review}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover bg-[var(--color-paper-alt)]"
              />
              <div>
                <p className="font-display font-bold text-[var(--color-ink)]">{current.name}</p>
                <p className="text-sm text-[var(--color-slate)]">
                  {current.course} • {current.currentRole}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
              ))}
            </div>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-3 mt-10 justify-center">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-paper-alt)] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="font-mono-num text-sm text-[var(--color-slate)]">
              {index + 1} / {testimonials.length}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center hover:bg-[var(--color-paper-alt)] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}