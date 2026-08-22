export const LoadingFallback = () => {
  return (
    <div className="flex h-full w-full min-h-[50vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-slate-400">
        <div className="h-7 w-7 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
        <span className="text-xs font-medium tracking-wide">Loading...</span>
      </div>
    </div>
  )
}

