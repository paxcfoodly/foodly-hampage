type Logo = {
  name: string;
  className: string;
};

// Placeholder customer wordmarks — replace with real logos when permission obtained.
const LOGOS: Logo[] = [
  { name: '한솔푸드', className: 'text-xl font-extrabold tracking-tight' },
  { name: 'MICHAN F&B', className: 'font-mono text-[15px] uppercase tracking-[0.2em]' },
  { name: '다온제과', className: 'text-xl font-bold' },
  { name: '새벽', className: 'text-lg font-light uppercase tracking-[0.5em]' },
  { name: '청년반찬', className: 'text-xl font-bold' },
  { name: 'GRU BAKERY', className: 'text-base font-extrabold uppercase tracking-tight' },
];

export function LogoWall() {
  return (
    <section className="bg-cream pb-20 pt-4 max-[767px]:pb-14">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <p className="reveal text-center text-[11px] font-bold uppercase tracking-[1.5px] text-stone-medium">
          이런 식품 제조업체들이 함께하고 있습니다
        </p>
        <div className="reveal reveal-d1 mt-8 grid grid-cols-6 items-center justify-items-center gap-x-8 gap-y-7 max-[1024px]:grid-cols-3 max-[640px]:grid-cols-2">
          {LOGOS.map((l) => (
            <span
              key={l.name}
              className={`text-stone-medium opacity-60 transition-all duration-300 hover:text-ink hover:opacity-100 ${l.className}`}
            >
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
