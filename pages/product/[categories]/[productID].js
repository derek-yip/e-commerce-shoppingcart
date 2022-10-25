import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image';

function ProductItem({product}) {
  console.log(product);
  return (
    <div>
      {
        product.map((details)=>{
          return(
            <div key={details.id}>
                <h1>{details.productName}</h1>
                <p>{details.product_detail}</p>
                <h2>{details.categories}</h2>
                <Image src={`/img/product/${details.img_url}`} width={500} height={500}/>
                <Image src={`/img/product/logo/${details.producer.logo}`} width={200} height={200}/>              
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductItem

export async function getServerSideProps(context){
  const { params } = context
  const {productId} = params
  const response = await fetch(
    `http://localhost:4000/ProductList?id=${productId}`
    )

  const data = await response.json()

  return{
    props:{
      product:data
    }
  }
}