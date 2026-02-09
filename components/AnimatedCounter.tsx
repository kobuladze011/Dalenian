"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  label: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  label
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  const animateCounter = useCallback(() => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [end, duration]);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounter();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated, animateCounter]);

  return (
    <div ref={counterRef} style={{ textAlign: "center" }}>
      <div
        style={{
          fontSize: "48px",
          fontWeight: 700,
          color: "#dd6b54",
          lineHeight: 1.2,
          marginBottom: "8px"
        }}
      >
        {count}
      </div>
      <div
        style={{
          fontSize: "16px",
          color: "#4d4239",
          fontWeight: 500
        }}
      >
        {label}
      </div>
    </div>
  );
}
