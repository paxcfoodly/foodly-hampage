export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-8">
        <p className="font-serif text-5xl text-ink leading-tight">
          Foodly — <em className="text-teal not-italic">scaffolding</em> in progress
        </p>
        <p className="mt-4 font-mono text-sm text-stone">Phase 2 · design tokens migrated</p>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-teal-light px-4 py-2 text-xs font-bold text-teal-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-brand" />
          tokens · fonts · animations ready
        </div>
      </div>
    </main>
  );
}
