import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { BarChart3, LayoutDashboard, Settings, UserCircle, Menu } from 'lucide-react'
import { ThemeToggle } from '../theme/ThemeToggle'

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 md:block">
          <div className="mb-6 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary-500"></div>
            <span className="text-lg font-semibold">ProfilePro</span>
          </div>
          <nav className="space-y-1">
            <NavLink to="/" end className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300' : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/60'}`
            }>
              <LayoutDashboard size={16} /> Dashboard
            </NavLink>
            <NavLink to="/profile" className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300' : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/60'}`
            }>
              <UserCircle size={16} /> Profile
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300' : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/60'}`
            }>
              <BarChart3 size={16} /> Analytics
            </NavLink>
            <NavLink to="/settings" className={({ isActive }) =>
              `flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive ? 'bg-primary-500/10 text-primary-600 dark:text-primary-300' : 'hover:bg-slate-100/60 dark:hover:bg-slate-800/60'}`
            }>
              <Settings size={16} /> Settings
            </NavLink>
          </nav>
        </aside>
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-10 border-b border-slate-200/60 bg-white/60 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
              <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-slate-100/60 dark:hover:bg-slate-800/60" aria-label="Open menu">
                <Menu size={18} />
              </button>
              <div className="flex-1" />
              <ThemeToggle />
              <div className="ml-2 h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-900 ring-2 ring-primary-500/30" />
            </div>
          </header>
          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

