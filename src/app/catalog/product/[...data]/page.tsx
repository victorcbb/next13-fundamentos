import { AddToCardButton } from './add-to-card-button'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default async function Product({ params }: ProductProps) {
  const response = await fetch('https://api.github.com/users/victorcbb')
  const user = await response.json()

  const [productId, size, color] = params.data

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCardButton />
    </div>
  )
}
