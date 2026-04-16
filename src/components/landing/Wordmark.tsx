type WordmarkProps = {
  height?: number;
  className?: string;
};

/**
 * Custom SVG wordmark for "foodly".
 *
 * Hand-crafted monoline letterforms — not a font. Each letter is built
 * from stroked primitives (paths + ellipses) with consistent 10-unit
 * stroke width and rounded caps, giving the mark a clean geometric
 * feel that holds up at any size without depending on a web font.
 *
 * viewBox 0 0 260 90 with the baseline at y=65 and the y-descender
 * reaching y=80.
 */
export function Wordmark({ height = 22, className = '' }: WordmarkProps) {
  return (
    <svg
      viewBox="0 0 260 90"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="foodly"
      role="img"
    >
      <title>foodly</title>

      {/* f — stem + top-right hook, horizontal crossbar */}
      <path d="M 20 65 L 20 28 Q 20 16 32 16" />
      <path d="M 6 35 L 34 35" />

      {/* o */}
      <ellipse cx="58" cy="48" rx="13" ry="11" />

      {/* o */}
      <ellipse cx="94" cy="48" rx="13" ry="11" />

      {/* d — bowl + right ascender stem */}
      <ellipse cx="130" cy="48" rx="13" ry="11" />
      <path d="M 143 16 L 143 65" />

      {/* l */}
      <path d="M 162 16 L 162 65" />

      {/* y — left leg, right leg continuing as descender */}
      <path d="M 180 32 L 192 58" />
      <path d="M 206 32 L 186 80" />
    </svg>
  );
}
