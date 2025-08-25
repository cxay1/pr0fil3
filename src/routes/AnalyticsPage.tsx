import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

const data = [
  { name: 'Mon', views: 400 },
  { name: 'Tue', views: 520 },
  { name: 'Wed', views: 680 },
  { name: 'Thu', views: 540 },
  { name: 'Fri', views: 720 },
  { name: 'Sat', views: 610 },
  { name: 'Sun', views: 830 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold">Weekly Views</h2>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-900/60">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>
      <div className="rounded-xl border border-slate-200/60 bg-white/60 p-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/40">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#0f172a0d" />
              <XAxis dataKey="name" stroke="currentColor" opacity={0.6} />
              <YAxis stroke="currentColor" opacity={0.6} />
              <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(148,163,184,0.4)' }} />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

