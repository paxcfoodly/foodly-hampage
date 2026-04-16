const NAV_ITEMS = ['대시보드', '입고', '생산', '재고', '수불대장', '리포트'];

type Kpi = { label: string; value: string; delta: string; deltaColor?: string };
const KPIS: Kpi[] = [
  { label: '오늘 입고', value: '12건', delta: '+3 vs 어제', deltaColor: 'text-teal' },
  { label: '진행 생산', value: '4', delta: '가동 중', deltaColor: 'text-teal' },
  { label: '안전재고 미달', value: '2종', delta: '경고', deltaColor: 'text-[#A32D2D]' },
  { label: '월 수불 PDF', value: '준비 완료', delta: '4월', deltaColor: 'text-stone' },
];

type Activity = { tag: string; tagColor: string; text: string; time: string };
const ACTIVITY: Activity[] = [
  {
    tag: 'OCR',
    tagColor: 'bg-teal-light text-teal-dark',
    text: '(주)대한제분 거래명세서 인식 → 입고 확정',
    time: '방금',
  },
  {
    tag: '장비',
    tagColor: 'bg-[#EEEDFE] text-[#3C3489]',
    text: '출하라인 1호기 · PROD-005-06 생산 207개 자동 집계',
    time: '2분 전',
  },
  {
    tag: '경고',
    tagColor: 'bg-[#FCEBEB] text-[#A32D2D]',
    text: '밀가루(중력분) 안전재고 미달 — 30 kg 잔여',
    time: '14분 전',
  },
  {
    tag: 'PDF',
    tagColor: 'bg-amber-light text-amber',
    text: '4월분 원료수불대장 자동 생성 · 다운로드 준비',
    time: '1시간 전',
  },
];

export function HeroVisual() {
  return (
    <section className="relative bg-cream pb-24 max-[767px]:pb-14">
      <div className="mx-auto max-w-[1100px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="reveal relative overflow-hidden rounded-2xl border border-stone-light bg-white shadow-[0_40px_80px_-20px_rgba(14,27,22,0.25)]">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 border-b border-stone-light bg-cream px-5 py-3.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            <div className="ml-4 flex h-7 max-w-[420px] flex-1 items-center justify-center gap-1.5 rounded-md bg-white text-[11px] text-stone max-[767px]:max-w-none">
              <span className="text-teal">●</span>
              app.foodly.kr/dashboard
            </div>
          </div>

          {/* Dashboard layout */}
          <div className="grid grid-cols-[200px_1fr] max-[767px]:grid-cols-1">
            <aside className="border-r border-stone-light bg-cream p-4 text-xs max-[767px]:hidden">
              <div className="mb-3 px-2 text-[10px] font-bold uppercase tracking-wider text-stone-medium">
                메뉴
              </div>
              {NAV_ITEMS.map((n, i) => (
                <div
                  key={n}
                  className={`mb-1 rounded-md px-3 py-2 ${
                    i === 0
                      ? 'bg-teal font-semibold text-white shadow-[0_4px_12px_rgba(29,158,117,0.3)]'
                      : 'text-stone'
                  }`}
                >
                  {n}
                </div>
              ))}
            </aside>

            <main className="p-6 max-[767px]:p-4">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-ink">대시보드</div>
                  <div className="mt-0.5 text-[11px] text-stone">
                    2026-04-16 · 오늘의 현황
                  </div>
                </div>
                <div className="cursor-pointer rounded-md bg-teal px-3 py-1.5 text-xs font-semibold text-white shadow-[0_4px_12px_rgba(29,158,117,0.3)]">
                  + 새 입고
                </div>
              </div>

              <div className="mb-5 grid grid-cols-4 gap-3 max-[767px]:grid-cols-2">
                {KPIS.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-lg border border-stone-light bg-white p-3.5"
                  >
                    <div className="text-[10px] font-medium text-stone">{k.label}</div>
                    <div className="mt-1.5 text-lg font-extrabold tracking-tight text-ink">
                      {k.value}
                    </div>
                    <div className={`mt-0.5 text-[10px] font-semibold ${k.deltaColor ?? 'text-stone'}`}>
                      {k.delta}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-stone-light p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-xs font-bold text-ink">최근 활동</div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-teal">
                    <span className="h-1.5 w-1.5 animate-pulse-brand rounded-full bg-teal" />
                    LIVE
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  {ACTIVITY.map((row) => (
                    <div
                      key={row.text}
                      className="flex items-center gap-3 rounded-md px-2 py-2 text-xs"
                    >
                      <span
                        className={`flex-shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold ${row.tagColor}`}
                      >
                        {row.tag}
                      </span>
                      <span className="flex-1 truncate text-ink">{row.text}</span>
                      <span className="flex-shrink-0 text-[10px] text-stone-medium max-[767px]:hidden">
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
