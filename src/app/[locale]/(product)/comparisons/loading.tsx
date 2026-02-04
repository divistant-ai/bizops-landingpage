export default function ComparisonsLoading() {
  return (
    <div className="flex min-h-screen w-full animate-pulse bg-white dark:bg-slate-950">
      {/* Sidebar Skeleton */}
      <div className="hidden w-80 border-r border-slate-200 bg-slate-50 p-6 lg:block dark:border-slate-800 dark:bg-slate-900">
        <div className="mb-8 h-8 w-32 rounded bg-slate-200 dark:bg-slate-800" />
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="h-10 w-full rounded-lg bg-slate-200 dark:bg-slate-800" />
          ))}
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 p-6 lg:p-12">
        <div className="mb-12 space-y-6">
          <div className="h-12 w-1/2 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-64 w-full rounded-2xl bg-slate-100 dark:bg-slate-900" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-40 rounded-xl bg-slate-100 dark:bg-slate-900" />
          ))}
        </div>
      </div>
    </div>
  );
}
