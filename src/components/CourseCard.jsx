// src/components/CourseCard.jsx
import { Clock, Laptop2, ArrowRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className="group rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden hover:shadow-lg hover:border-[var(--color-gold)] transition-all">
      <div className="aspect-[16/10] bg-[var(--color-paper-alt)] overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-[var(--color-teal)]">
          {course.category}
        </span>

        <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mt-2 mb-2">
          {course.title}
        </h3>

        <p className="text-sm text-[var(--color-slate)] leading-relaxed line-clamp-2 mb-4">
          {course.shortDescription}
        </p>

        <div className="flex items-center gap-4 text-xs text-[var(--color-slate)] mb-5">
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Laptop2 size={14} /> {course.mode}
          </span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
          <span className="font-mono-num font-bold text-[var(--color-ink)]">
            {course.fees?.totalFee}
          </span>
          <a
            href={`/courses/${course.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors"
          >
            View Details <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}