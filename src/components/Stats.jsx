// src/components/Stats.jsx
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Students Trained", value: 12000, suffix: "+" },
  { label: "Placement Rate", value: 92, suffix: "%" },
  { label: "Hiring Partners", value: 180, suffix: "+" },
  { label: "Courses Offered", value: 38, suffix: "" },
];

function useCountUp(target, shouldStart) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    const duration = 1500;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      setCount(Math.min(Math.round(target * progress), target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [target, shouldStart]);

  return count;
}

function StatItem({ stat, shouldStart }) {
  const count = useCountUp(stat.value, shouldStart);
  return (
    <div className="text-center">
      <p className="font-mono-num text-4xl sm:text-5xl font-bold text-[var(--color-gold)]">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm sm:text-base text-white/70">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[var(--color-ink)] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} shouldStart={inView} />
        ))}
      </div>
    </section>
  );
}