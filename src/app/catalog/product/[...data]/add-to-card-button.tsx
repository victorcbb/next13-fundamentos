'use client'

import { ReactNode, useState } from 'react'
import { Test } from './test'

export function AddToCardButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  const addToCart = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho ({count})</button>
      {children}
    </div>
  )
}
