import { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { PATHS } from '@/routes/paths'
import { LoadingFallback } from '@/components/LoadingFallback'

export const AuthLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-950 text-slate-100 antialiased font-sans">
      {/* Auth Header / Brand */}
      <header className="flex items-center justify-between px-8 py-6">
        <Link to={PATHS.HOME} className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30 group-hover:bg-indigo-500 transition">
            <Zap className="h-4 w-4 fill-white" />
          </div>
          <span className="font-bold text-base tracking-tight text-slate-100 group-hover:text-white transition">
            API Dev Tool
          </span>
        </Link>
      </header>

      {/* Auth Content */}
      <main className="flex flex-1 items-center justify-center p-6">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

