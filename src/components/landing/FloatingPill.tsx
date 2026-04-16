'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function FloatingPill() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Link
      href="/trial"
      className={`fixed bottom-7 right-7 z-50 inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-3 text-[13px] font-bold text-white no-underline shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-[0_12px_40px_rgba(29,158,117,0.5)] max-[767px]:bottom-5 max-[767px]:right-4 max-[767px]:px-4 max-[767px]:py-2.5 max-[767px]:text-xs ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <span className="h-[7px] w-[7px] animate-pulse-brand rounded-full bg-teal-medium" />
      14일 무료 체험
    </Link>
  );
}
