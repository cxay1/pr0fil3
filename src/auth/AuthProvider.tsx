import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { User } from '../types'

type AuthContextValue = {
  user: User | null
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>({
    id: 'u_1',
    email: 'jane@example.com',
    name: 'Jane Doe',
    username: 'janedoe',
    avatarUrl: '',
    coverUrl: '',
    bio: 'Product designer and creator. Building accessible experiences.',
    createdAt: new Date(),
  })

  const signIn = () => {
    setUser({
      id: 'u_1',
      email: 'jane@example.com',
      name: 'Jane Doe',
      username: 'janedoe',
      avatarUrl: '',
      coverUrl: '',
      bio: 'Product designer and creator. Building accessible experiences.',
      createdAt: new Date(),
    })
  }

  const signOut = () => setUser(null)

  const value = useMemo(() => ({ user, signIn, signOut }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

