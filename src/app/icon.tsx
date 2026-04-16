import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#1d9e75',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          borderRadius: 7,
        }}
      >
        <div style={{ width: 18, height: 2.5, borderRadius: 1.5, background: 'white' }} />
        <div style={{ width: 12, height: 2.5, borderRadius: 1.5, background: 'white' }} />
        <div style={{ width: 14, height: 2.5, borderRadius: 1.5, background: 'white' }} />
      </div>
    ),
    { ...size },
  );
}
