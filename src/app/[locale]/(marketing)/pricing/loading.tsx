export default function PricingLoading() {
  return (
    <div className="flex w-full animate-pulse flex-col items-center justify-center space-y-8 bg-slate-50 py-24 dark:bg-slate-950">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-4 w-32 rounded-full bg-slate-200 dark:bg-slate-800" />
        <div className="mx-auto h-12 w-96 rounded-lg bg-slate-200 dark:bg-slate-800" />
        <div className="mx-auto h-6 w-128 rounded bg-slate-200 dark:bg-slate-800" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-[600px] rounded-2xl bg-slate-200 p-8 dark:bg-slate-800">
            <div className="mb-8 space-y-4">
              <div className="h-6 w-24 rounded bg-slate-300 dark:bg-slate-700" />
              <div className="h-10 w-32 rounded bg-slate-300 dark:bg-slate-700" />
            </div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map(j => (
                <div key={j} className="h-4 w-full rounded bg-slate-300 dark:bg-slate-700" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
