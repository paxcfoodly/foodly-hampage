type Testi = {
  text: string;
  name: string;
  role: string;
  initial: string;
  avatarBg: string;
  delay: 1 | 2 | 3;
};

const ITEMS: Testi[] = [
  {
    text: '매달 식약처 감사 전날 밤새 수불대장 정리하던 게 이제는 버튼 한 번으로 끝납니다. 처음에는 반신반의했는데 OCR 인식률이 정말 높아서 놀랐어요.',
    name: '김○○ 대표',
    role: '제과제빵 제조업 · 직원 8명',
    initial: '김',
    avatarBg: '#1D9E75',
    delay: 1,
  },
  {
    text: '장비 API 연동 설정이 30분도 안 걸렸어요. 그 다음 날부터 생산량이 자동으로 들어오고 재고가 알아서 차감되는 걸 보고 직원들이 다 놀랐습니다.',
    name: '박○○ 공장장',
    role: '반찬 식품 제조 · 직원 15명',
    initial: '박',
    avatarBg: '#534AB7',
    delay: 2,
  },
  {
    text: 'HACCP 심사를 앞두고 도입했는데 심사관이 수불대장 보고 「관리가 잘 되어 있다」고 하더라고요. 로트 추적도 즉시 보여줄 수 있어서 매우 만족합니다.',
    name: '이○○ 품질관리팀장',
    role: '소스·조미료 제조 · 직원 22명',
    initial: '이',
    avatarBg: '#D4860A',
    delay: 3,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="reveal">
          <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
            고객 후기
          </div>
        </div>
        <h2
          className="reveal reveal-d1 mb-12 font-serif leading-[1.2] text-ink"
          style={{ fontSize: 'clamp(32px,4vw,52px)' }}
        >
          현장에서
          <br />
          <em className="text-teal">직접 확인한 변화</em>
        </h2>
        <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-[767px]:grid-cols-1 max-[767px]:gap-4">
          {ITEMS.map((t) => (
            <article
              key={t.name}
              className={`reveal reveal-d${t.delay} rounded-2xl border border-stone-light bg-white p-8 transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] max-[767px]:p-6`}
            >
              <div className="mb-3.5 text-sm tracking-[2px] text-amber">★★★★★</div>
              <div className="mb-4 font-serif text-3xl leading-none text-teal-medium">&ldquo;</div>
              <p className="mb-6 text-[15px] leading-[1.75] text-ink max-[767px]:text-sm">{t.text}</p>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ background: t.avatarBg }}
                >
                  {t.initial}
                </span>
                <div>
                  <div className="text-sm font-bold text-ink">{t.name}</div>
                  <div className="text-xs text-stone">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
