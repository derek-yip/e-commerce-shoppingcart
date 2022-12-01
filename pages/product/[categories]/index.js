import React from 'react'
import ProductSliderBar from '../../../public/component/ProductSliderBar/ProductSLiderBar';
import Link from 'next/link';

function categories({productList,categories}) {
  return (
    <div className={`${categories}`}>
      <ProductSliderBar List={productList}/>
      
      <button className={`w-80 h-100`}><Link href={'/product/categories'}> Back </Link></button>
      
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