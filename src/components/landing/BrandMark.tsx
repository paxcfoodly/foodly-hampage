type BrandMarkProps = {
  size?: number;
  className?: string;
};

/**
 * Foodly brand mark — three stacked bars suggesting ledger entries
 * inside a teal rounded square. Pairs with the wordmark in nav/footer.
 */
export function BrandMark({ size = 28, className = '' }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="7" fill="#1d9e75" />
      <rect x="7" y="9" width="14" height="2" rx="1" fill="white" />
      <rect x="7" y="13" width="10" height="2" rx="1" fill="white" />
      <rect x="7" y="17" width="12" height="2" rx="1" fill="white" />
    </svg>
  );
}
