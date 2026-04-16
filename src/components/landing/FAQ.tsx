type Item = { q: string; a: string };

const FAQS: Item[] = [
  {
    q: '데이터는 어디에 저장되며 보안은 어떻게 보장되나요?',
    a: '국내 클라우드 인프라(IDC)에서 SSL로 암호화 전송되며, 모든 데이터는 매일 자동 백업됩니다. 사업장별로 데이터가 격리되어 다른 업체나 외부에서 접근할 수 없습니다.',
  },
  {
    q: 'HACCP 인증과 Foodly는 어떤 관계인가요?',
    a: 'Foodly는 HACCP 인증 자체를 발급하는 서비스가 아니며, HACCP 인증·미인증 업체 모두 사용할 수 있습니다. 인증 심사에서 요구되는 원료수불대장·로트 추적 등 기록 관리를 자동화해 심사 준비 시간을 크게 단축합니다.',
  },
  {
    q: '해지하면 그동안 작성한 수불대장은 어떻게 되나요?',
    a: '해지 시 작성된 수불대장과 입고·생산 기록 전체를 PDF·엑셀로 다운로드해 보관하실 수 있습니다. 별도 신청 없이 자동 제공되므로 데이터 손실 걱정이 없습니다.',
  },
  {
    q: '기존 ERP나 회계 프로그램과 연동 가능한가요?',
    a: '스탠다드 요금제 이상에서 REST API를 제공하며, 프로 요금제는 기존 시스템과의 직접 연동을 지원합니다. 더존, SAP, 영림원 등 주요 ERP와의 연동 사례가 있으니 사전 문의 부탁드립니다.',
  },
  {
    q: 'OCR 인식이 잘못된 경우 어떻게 수정하나요?',
    a: 'OCR 분석 결과는 신뢰도(높음/확인 필요/입력 필요)별로 색상이 다르게 표시되어, 확인이 필요한 항목만 즉시 수정할 수 있습니다. 수정한 내용은 자동으로 학습되어 같은 거래처의 다음 명세서 인식률이 점진적으로 향상됩니다.',
  },
  {
    q: '무료 체험 14일이 끝나면 자동으로 결제되나요?',
    a: '아니요. 카드 등록 없이 시작하기 때문에 체험이 종료돼도 자동 결제는 발생하지 않습니다. 체험 종료 3일 전 안내 이메일을 보내드리며, 정식 사용을 원하실 때 직접 결제 수단을 등록하시면 됩니다.',
  },
];

const ChevronDown = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-[100px] max-[767px]:py-16">
      <div className="mx-auto max-w-[1160px] px-10 max-[1024px]:px-7 max-[767px]:px-5">
        <div className="text-center">
          <div className="reveal">
            <div className="mb-3.5 inline-block text-[11px] font-bold uppercase tracking-[1.5px] text-teal">
              자주 묻는 질문
            </div>
          </div>
          <h2
            className="reveal reveal-d1 mx-auto mb-3 font-bold leading-[1.2] text-ink"
            style={{ fontSize: 'clamp(32px,4vw,52px)' }}
          >
            궁금한 점,
            <br />
            <em className="text-teal">미리 답해드립니다</em>
          </h2>
          <p className="reveal reveal-d2 mx-auto text-[17px] leading-[1.7] text-stone">
            도입 전 가장 많이 받는 질문들을 정리했습니다.
          </p>
        </div>

        <div className="reveal reveal-d3 mx-auto mt-12 max-w-[760px]">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group border-b border-stone-light py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink marker:hidden">
                <span className="flex-1">{item.q}</span>
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-stone-light/60 text-stone transition-transform duration-300 group-open:rotate-180 group-open:bg-teal-light group-open:text-teal-dark">
                  {ChevronDown}
                </span>
              </summary>
              <p className="mt-4 pr-10 text-sm leading-[1.75] text-stone max-[767px]:pr-0">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
