'use client';

import { useEffect, useState } from 'react';

export function LiveCounter({ start = 1240 }: { start?: number }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((v) => v + Math.floor(Math.random() * 3));
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return <>{value.toLocaleString()}</>;
}
