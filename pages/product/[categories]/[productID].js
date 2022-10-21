import { useRouter } from 'next/router'
import React from 'react'

function ProductItem() {
  const router = useRouter()

  return (
    <div>
      <p>Product ID: {router.query.productId}</p>
    </div>
  )
}

export default ProductItem