import { createBrowserRouter, Navigate } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardPage from './routes/DashboardPage'
import ProfilePage from './routes/ProfilePage'
import AnalyticsPage from './routes/AnalyticsPage'
import SettingsPage from './routes/SettingsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <DashboardLayout>
        <DashboardPage />
      </DashboardLayout>
    ),
  },
  {
    path: '/profile',
    element: (
      <DashboardLayout>
        <ProfilePage />
      </DashboardLayout>
    ),
  },
  {
    path: '/analytics',
    element: (
      <DashboardLayout>
        <AnalyticsPage />
      </DashboardLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <DashboardLayout>
        <SettingsPage />
      </DashboardLayout>
    ),
  },
  { path: '*', element: <Navigate to="/" replace /> },
])

