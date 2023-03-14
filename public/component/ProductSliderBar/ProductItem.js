import Link from 'next/link'
import React, { useState, useEffect} from 'react'
import Image from 'next/image'
import ProductSliderBarStyle from '../../../styles/scss/Slider/ProductSliderBar.module.scss'
import AddCartButton from '../Button/AddCartButton';
import { useShoppingCart } from '../../context/ShoppingCartContext';
import dynamic from 'next/dynamic';

function ProductItem(props) {
    
    const {
      product = props.product
    } = props

    const {getItemQuantity} = useShoppingCart()
    const quantity= getItemQuantity(product._id)

  return (
    <div>
        <Link href={`/product/${product.categories}/${product._id}`}>
            <div className='d-flex flex-column flex-grow-1'>
              <div key={product._id} className={`pointer product_item d-flex flex-column justify-content-evenly`}>
                <div className={`position-relative w-100`} style={{height:'300px'}}>                                  
                  <Image src={`/img/product/${product.img_url}`} alt={``} layout={`fill`} objectFit={`contain`} priority/>
                </div>
                <div className={`productDetail mb-4 d-flex flex-column justify-content-evenly ${ProductSliderBarStyle.productDetail}`}>  
                  <h1 >{product.productName}</h1>
                  <p className={`text-primary fw-bold fs-3 fs-md-4 fs-lg-4 mt-3 text-center bg-warning p-2`}>HKD {product.price.originalPrice}</p>
                </div>
              </div>
            </div>
        </Link>

        <AddCartButton id={product._id} quantity={quantity} price={product.price.discountPrice}/>                              
    </div>
  )
}

export default dynamic(()=>Promise.resolve(ProductItem), {ssr:false})
