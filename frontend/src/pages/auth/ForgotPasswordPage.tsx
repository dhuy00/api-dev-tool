import { Link } from 'react-router-dom'
import { PATHS } from '@/routes/paths'

export const ForgotPasswordPage = () => {
  return (
    <div className="w-full max-w-sm rounded-xl bg-slate-900 border border-slate-800 p-6 shadow-xl text-slate-100">
      <h2 className="text-xl font-bold text-slate-100 mb-1">Reset Password</h2>
      <p className="text-xs text-slate-400 mb-6">Enter your email and we'll send you recovery instructions</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">Email</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-lg bg-slate-950 border border-slate-800 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
          />
        </div>

        <button
          type="button"
          className="w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition shadow-md shadow-indigo-600/30"
        >
          Send Reset Link
        </button>
      </div>

      <div className="mt-6 text-center text-xs text-slate-400">
        Remember your password?{' '}
        <Link to={PATHS.AUTH.LOGIN} className="text-indigo-400 hover:text-indigo-300 font-medium">
          Back to sign in
        </Link>
      </div>
    </div>
  )
}

export default ForgotPasswordPage

