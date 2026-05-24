'use client';

import { useEffect, useState } from 'react';

export function useActiveSection(ids, rootMargin = '-40% 0px -55% 0px') {
  const [active, setActive] = useState(ids[0] || null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids.join(','), rootMargin]);

  return active;
}
