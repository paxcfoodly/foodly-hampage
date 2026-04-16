type Feat = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
};

const FEATS: Feat[] = [
  {
    title: 'OCR 자동 입고',
    desc: '거래명세서 촬영 → Claude Vision → 자동 입력. 양식 무관.',
    iconBg: 'bg-teal-light',
    iconColor: 'stroke-teal',
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </>
    ),
  },
  {
    title: '장비 생산 자동 집계',
    desc: 'REST API 한 번 설정. 이후 생산 데이터 자동 수신 · 재고 차감.',
    iconBg: 'bg-teal-light',
    iconColor: 'stroke-teal',
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    title: '수불대장 원클릭 출력',
    desc: '식약처 양식 PDF · 엑셀 즉시 출력. 로트 역추적 지원.',
    iconBg: 'bg-teal-light',
    iconColor: 'stroke-teal',
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </>
    ),
  },
  {
    title: '재고 현황 대시보드',
    desc: '안전재고 기준 실시간 경보. 유통기한 임박 자동 알림.',
    iconBg: 'bg-[#EEEDFE]',
    iconColor: 'stroke-[#534AB7]',
    icon: (
      <>
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </>
    ),
  },
  {
    title: '레시피 배합비율 관리',
    desc: '버전 관리 · 생산 시 FIFO 자동 차감 · 재고 부족 사전 경고.',
    iconBg: 'bg-[#EEEDFE]',
    iconColor: 'stroke-[#534AB7]',
    icon: (
      <>
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
      </>
    ),
  },
  {
    title: '카카오 · 이메일 알림',
    desc: '안전재고 · 유통기한 · 불량률 초과 시 즉시 알림 발송.',
    iconBg: 'bg-amber-light',
    iconColor: 'stroke-amber',
    icon: (
      <>
        <path d="M18 8h1a4 4 0 010 8h-1" />
        <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </>
    ),
  },
];

export function AllFeaturesGrid() {
  return (
    <section className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="reveal">
          <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
            전체 기능
          </div>
        </div>
        <h2
          className="reveal reveal-d1 mb-12 font-serif leading-[1.2] text-ink"
          style={{ fontSize: 'clamp(32px,4vw,52px)' }}
        >
          필요한 모든 것이
          <br />
          <em className="text-teal">하나에 담겨 있습니다</em>
        </h2>
        <div className="reveal reveal-d2 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-stone-light max-[1024px]:grid-cols-2 max-[767px]:grid-cols-2 max-[767px]:rounded-xl">
          {FEATS.map((f) => (
            <div
              key={f.title}
              className="bg-white p-8 transition-colors hover:bg-[#f0faf6] max-[767px]:p-5"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-[10px] ${f.iconBg}`}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className={f.iconColor}
                >
                  {f.icon}
                </svg>
              </div>
              <div className="mb-2 text-[15px] font-bold text-ink">{f.title}</div>
              <div className="text-[13px] leading-[1.6] text-stone">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
