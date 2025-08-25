import { Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-md border border-transparent bg-primary-500/10 px-3 py-2 text-sm font-medium text-primary-500 backdrop-blur hover:bg-primary-500/20 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:text-primary-50 dark:bg-primary-500/20 dark:hover:bg-primary-500/30"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

