# foodly-homepage

**Foodly** 랜딩 페이지 — 소규모 식품 제조업체를 위한 원료수불·재고·생산 통합 관리 SaaS의 마케팅 사이트입니다.

## 기술 스택

| 항목 | 버전 |
|---|---|
| Next.js | 16.2.2 (App Router, Turbopack) |
| React | 19.2.4 |
| Tailwind CSS | 4.2.2 (`@tailwindcss/postcss`) |
| TypeScript | 5 (strict) |
| Node.js | 22 (`.nvmrc`) |

프로젝트 컨벤션은 [foodly-FE](../Foodly/foodly-FE) (MES 프론트엔드)와 동일하게 맞췄습니다.

## 실행

```bash
nvm use           # Node 22
npm install
npm run dev       # http://localhost:3000
```

## 스크립트

| 명령 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 (Turbopack) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 |
| `npm run lint` | ESLint |

## 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 + 메타데이터
│   ├── page.tsx            # 랜딩 페이지 (섹션 조합)
│   ├── globals.css         # Tailwind + @theme 디자인 토큰
│   └── trial/page.tsx      # /trial — 14일 무료 체험
└── components/landing/
    ├── Nav.tsx             # 클라이언트 — 스크롤/모바일 메뉴
    ├── Hero.tsx
    ├── Problem.tsx
    ├── Features.tsx        # OCR/생산/수불 3블록
    ├── Workflow.tsx        # 클라이언트 — 스텝 순환
    ├── AllFeaturesGrid.tsx
    ├── Pricing.tsx
    ├── Testimonials.tsx
    ├── CTA.tsx
    ├── Footer.tsx
    ├── FloatingPill.tsx    # 클라이언트 — 스크롤 노출
    ├── LiveCounter.tsx     # 클라이언트 — 라이브 카운터
    └── RevealObserver.tsx  # 클라이언트 — IntersectionObserver
```

## 디자인 토큰

색상·폰트·애니메이션은 모두 `src/app/globals.css`의 `@theme {}` 블록에서 정의합니다. 주요 토큰:

- **색상**: `teal` / `teal-dark` / `teal-light` / `teal-medium`, `ink` / `ink-soft`, `cream`, `stone` 계열, `amber` / `amber-light`
- **폰트**: `font-sans` (Noto Sans KR), `font-serif` (DM Serif Display), `font-mono` (JetBrains Mono)
- **애니메이션**: `animate-fade-up`, `animate-fade-in`, `animate-float`, `animate-pulse-brand`, `animate-scan`, `animate-grow` 외

Tailwind v4 덕분에 `bg-teal`, `text-ink`, `font-serif` 같은 유틸리티가 자동 생성됩니다.

## 배포

Vercel 자동 배포 가정. 환경 변수는 `.env.example` 참고.
