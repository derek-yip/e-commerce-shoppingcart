import React from 'react'
import ProductSliderBar from '../../../public/component/ProductSliderBar/ProductSLiderBar';
import Link from 'next/link';

function categories({productList,categories}) {
  console.log({productList});
  return (
    <div className={`${categories}`}>
      <ProductSliderBar List={productList}/>
      <Link href={'/product/categories'}>
        <button className={`w-80 h-100`}> Back </button>
      </Link>
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