import { ReactNode } from 'react'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <h1 className="text-xl font-bold">Logo do app</h1>
      <div>{children}</div>
    </div>
  )
}
