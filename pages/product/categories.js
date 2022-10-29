import React from 'react'
import Image from 'next/image'
import ProductSliderBar from '../../public/component/ProductSliderBar/ProductSliderBar'

function categories({productList,categoriesSet}) {
  return (
    <>
      <ProductSliderBar List={productList}/>
    </>
  )
}

export default categories

export async function getServerSideProps(){
  const response = await fetch(
    `http://localhost:4000/ProductList`
  )
  
  const data = await response.json()

  return{
    props:{
      productList:data,
    }
  }

}
