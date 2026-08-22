import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { LoadingFallback } from '@/components/LoadingFallback'
import Sidebar from './components/Sidebar'

export const MainLayout = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 antialiased font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area with Suspense for lazy routes */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-950">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  )
}

