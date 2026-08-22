import { NavLink } from 'react-router-dom'
import {
  Zap,
  Layers,
  Activity,
  FileText,
  Settings,
  FolderOpen,
  GitBranch,
} from 'lucide-react'
import { PATHS } from '@/routes/paths'
import { cn } from '@/lib/utils'

const navigationItems = [
  { name: 'Request Builder', path: PATHS.HOME, icon: Zap },
  { name: 'Collections', path: PATHS.COLLECTIONS, icon: FolderOpen },
  { name: 'Flows', path: PATHS.FLOWS.ROOT, icon: GitBranch },
  { name: 'Environments', path: PATHS.ENVIRONMENTS, icon: Layers },
  { name: 'Performance', path: PATHS.PERFORMANCE, icon: Activity },
  { name: 'Documentation', path: PATHS.DOCUMENTATION, icon: FileText },
]

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900/60 flex flex-col justify-between shrink-0 select-none">
      {/* Brand & Navigation */}
      <div>
        {/* Brand Header */}
        <div className="h-14 flex items-center gap-2.5 px-4 border-b border-slate-800">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-600/30">
            <Zap className="h-4 w-4 fill-white" />
          </div>
          <span className="font-bold text-sm tracking-tight text-slate-100">
            API Dev Tool
          </span>
        </div>

        {/* Nav Links */}
        <nav className="p-3 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-2.5 px-3 py-2 text-sm font-medium rounded-md transition',
                    isActive
                      ? 'bg-indigo-600/15 text-indigo-400 border border-indigo-500/20'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  )
                }
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{item.name}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>

      {/* User / Workspace Footer */}
      <div className="p-3 border-t border-slate-800">
        <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/80 border border-slate-800">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold text-slate-200">
              WS
            </div>
            <div className="text-left">
              <p className="text-xs font-medium text-slate-200">Main Workspace</p>
              <p className="text-[10px] text-slate-500">Free Tier</p>
            </div>
          </div>
          <NavLink
            to={PATHS.SETTINGS.ROOT}
            className="text-slate-400 hover:text-slate-200 transition p-1 rounded hover:bg-slate-800"
            title="Settings"
          >
            <Settings className="h-4 w-4" />
          </NavLink>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar

