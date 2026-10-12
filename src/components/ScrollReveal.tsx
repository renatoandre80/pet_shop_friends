"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.add("is-visible");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
