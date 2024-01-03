import { ReactNode } from 'react'

interface AdminLayoutProps {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div>
      <div>{children}</div>
      <p>Painel de administração</p>
    </div>
  )
}
