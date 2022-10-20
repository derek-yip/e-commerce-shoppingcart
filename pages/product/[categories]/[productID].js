import React from 'react'

function ProductItem({productId}) {
  return (
    <div>
      <p>{productId}</p>
    </div>
  )
}

export async function getStaticProps(context) {
  const {productId} = context
  return{
    props:{
      productId
    }
  }
}

export default ProductItem