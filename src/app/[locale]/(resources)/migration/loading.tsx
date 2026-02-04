export default function MigrationLoading() {
  return (
    <div className="w-full animate-pulse bg-white py-12 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-6 text-center">
          <div className="mx-auto h-10 w-3/4 rounded-lg bg-slate-200 lg:w-1/2 dark:bg-slate-800" />
          <div className="mx-auto h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-64 rounded-xl bg-slate-100 dark:bg-slate-900" />
          ))}
        </div>
      </div>
    </div>
  );
}
