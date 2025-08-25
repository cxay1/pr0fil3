import { motion } from 'framer-motion'
import { BarChart, Users, Eye } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Profile Views</p>
            <p className="mt-1 text-2xl font-semibold">12,480</p>
          </div>
          <Eye className="text-primary-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Followers</p>
            <p className="mt-1 text-2xl font-semibold">3,217</p>
          </div>
          <Users className="text-primary-500" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Engagement</p>
            <p className="mt-1 text-2xl font-semibold">8.4%</p>
          </div>
          <BarChart className="text-primary-500" />
        </div>
      </motion.div>
    </div>
  )
}

