import { BrandMark } from './BrandMark';
import { Wordmark } from './Wordmark';

type LogoProps = {
  variant?: 'dark' | 'light';
  size?: number;
};

/**
 * Foodly logo lockup — BrandMark icon + custom SVG Wordmark.
 *
 * - `dark` variant puts the ink-coloured wordmark on light backgrounds
 * - `light` variant puts a white wordmark on dark backgrounds
 *
 * Both the icon and wordmark are pure SVG — no web-font dependency,
 * keeping the mark consistent across load states and devices.
 */
export function Logo({ variant = 'dark', size = 26 }: LogoProps) {
  const wordmarkColor = variant === 'dark' ? 'text-ink' : 'text-white';
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark size={size} />
      <Wordmark
        height={Math.round(size * 0.78)}
        className={`${wordmarkColor} block`}
      />
    </span>
  );
}
