// src/components/WhyChooseUs.jsx
import { Users2, Briefcase, Laptop, BadgeCheck, Clock, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: Users2,
    title: "Mentor-Led, Small Batches",
    description:
      "Every batch is capped to ensure trainers know each student by name — not just a face in a crowd of hundreds.",
  },
  {
    icon: Briefcase,
    title: "Placement Cell That Doesn't Quit",
    description:
      "Our placement team works with you until you're hired — resume reviews, mock interviews, and real interview calls.",
  },
  {
    icon: Laptop,
    title: "Projects Over Slides",
    description:
      "Every course is built around real, portfolio-worthy projects — not just recorded lectures and multiple-choice quizzes.",
  },
  {
    icon: BadgeCheck,
    title: "Industry-Recognized Certification",
    description:
      "Certificates come with a verifiable ID that employers can check — backed by our hiring partner network.",
  },
  {
    icon: Clock,
    title: "Learn On Your Schedule",
    description:
      "Weekday, weekend, and evening batches — both online and offline — built around working professionals and students alike.",
  },
  {
    icon: HeartHandshake,
    title: "Real Internship Experience",
    description:
      "Most courses include a live internship component, so you graduate with actual work experience, not just a certificate.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-paper)] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-teal)]">
            Why Ascend
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mt-3">
            Built differently, on purpose.
          </h2>
          <p className="mt-4 text-[var(--color-slate)] text-lg leading-relaxed">
            Most institutes optimize for enrollments. We optimize for what happens after —
            whether you can actually get the job.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-7 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-gold)] transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--color-paper-alt)] flex items-center justify-center mb-5">
                <reason.icon size={20} className="text-[var(--color-teal)]" />
              </div>
              <h3 className="font-display font-semibold text-lg text-[var(--color-ink)] mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-[var(--color-slate)] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}