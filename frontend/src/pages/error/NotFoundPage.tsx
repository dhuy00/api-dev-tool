import { Link } from 'react-router-dom'
import { PATHS } from '@/routes/paths'

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-100">
      <div className="flex flex-col items-center max-w-md">
        <span className="text-7xl font-extrabold text-indigo-500 tracking-tight mb-2">404</span>
        <h1 className="text-xl font-semibold text-slate-200 mb-2">Page Not Found</h1>
        <p className="text-sm text-slate-400 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to={PATHS.HOME}
          className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition shadow-md shadow-indigo-600/30"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage

