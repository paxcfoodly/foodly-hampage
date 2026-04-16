import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Foodly — 식품 제조 통합 관리 플랫폼',
  description:
    '거래명세서 사진 한 장으로 입고 완료. 장비 데이터 자동 수신. 식약처 수불대장 원클릭 출력.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
