import React from 'react'
import Image from 'next/image';

function categories({productList,categories}) {
  console.log({productList});
  return (
    <div className={`${categories}`}>
      {
        productList.map((product)=>{
          return(
            <div key={product.id}>
                <h1>{product.productName}</h1>
                <p>{product.product_detail}</p>
                <h2>{product.categories}</h2>
                <Image src={`/img/product/${product.img_url}`} width={500} height={500}/>
                <Image src={`/img/product/logo/${product.producer.logo}`} width={200} height={200}/>              
            </div>
          )
        })
      }
    </div>
  )
}

export default categories

export async function getServerSideProps(context){
  const { params } = context
  const {categories} = params
  const response = await fetch(
    `http://localhost:4000/ProductList?categories=${categories}`
    )

  const data = await response.json()

  return{
    props:{
      productList:data,
      categories
    }
  }
}