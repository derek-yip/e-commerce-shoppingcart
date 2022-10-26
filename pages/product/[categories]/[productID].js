import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ProductItemStyle from '../../../styles/scss/ProductItem.module.scss'

function ProductItem({product}) {
  console.log(product);
  return (
    <div>
      {
        product.map((details)=>{
          return(
            <div key={details.id} className={`product_wrapper d-flex bg-white border border-2 border-primary ${ProductItemStyle.product_wrapper}`}>
              <div className={`product_img ${ProductItemStyle.product_img}`}>
                <Image src={`/img/product/${details.img_url}`} layout={`fill`} objectFit={'cover'} priority />                
              </div>
              
              <div className={`${ProductItemStyle.product_detail} d-flex flex-column align-items-center `}>
                  <div className={`product_logo ${ProductItemStyle.product_logo}`}>
                    <Image src={`/img/product/logo/${details.producer.logo}`} layout='fill' objectFit={'contain'} priority/>                                  
                  </div>
                  <div className={`border-top border-black ${ProductItemStyle.product_detail_inner}`}>  
                    <h1 className='mb-5 w-75'>{details.productName}</h1>
                    <p className='mb-5 text-justify'>{details.product_detail}</p>
                  </div>
                  <button className='w-75'>Add to Cart</button>
              </div>
              
            </div>
          )
        })
      }
      <Link href={'/product/categories'}>
        <button className={`w-80 h-40`}> Back </button>
      </Link>
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