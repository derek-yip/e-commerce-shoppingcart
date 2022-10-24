import { useRouter } from 'next/router'
import React from 'react'

function ProductItem({product}) {

  return (
    <div>
      <h1>{product.productName}</h1>
      <h1>{product.categories}</h1>
      <h1>{product.product_detail}</h1>
      <h1>{product.price.originalPrice}</h1>
      <h1>{product.nation}</h1>
    </div>
  )
}

export default ProductItem

export async function getStaticProps(context){
  const { params } = context
  const response = await fetch(
    `http://localhost:4000/ProductList/${params.id}`
    )

  const data = await response.json()

  return{
    props:{
      product:data
    }
  }
}

export async function getStaticPaths(){
  return{
    paths:[{
      params:{id:'63566dba91f9f9e98e50b5c2'}
    }],
    fallback:true
  }
}