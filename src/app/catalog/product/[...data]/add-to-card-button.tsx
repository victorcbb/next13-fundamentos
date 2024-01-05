'use client'

import { useState } from 'react'

export function AddToCardButton() {
  const [count, setCount] = useState(0)

  const addToCart = () => {
    setCount((prev) => prev + 1)
  }

  return <button onClick={addToCart}>Adicionar ao carrinho ({count})</button>
}
