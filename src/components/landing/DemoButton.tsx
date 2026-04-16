'use client';

import { useState } from 'react';
import { DemoVideoModal } from './DemoVideoModal';

type DemoButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DemoButton({ className = '', children = '데모 영상 보기' }: DemoButtonProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      {open && <DemoVideoModal onClose={() => setOpen(false)} />}
    </>
  );
}
