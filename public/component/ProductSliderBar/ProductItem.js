import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ProductSliderBarStyle from '../../../styles/scss/Slider/ProductSliderBar.module.scss'
import AddCartButton from '../Button/AddCartButton';

function ProductItem(props) {
    
    const {
        product = props.product
    } = props

  return (
    <>
        <Link href={`/product/${product.categories}/${product.id}`}>
            <div className='d-flex flex-column flex-grow-1'>
              <div key={product.id} className={`pointer product_item d-flex flex-column justify-content-evenly`}>
                <div className={`position-relative w-100`} style={{height:'300px'}}>                                  
                  <Image src={`/img/product/${product.img_url}`} layout={`fill`} objectFit={`contain`} priority/>
                </div>
                <div className={`productDetail mb-4 d-flex flex-column justify-content-evenly ${ProductSliderBarStyle.productDetail}`}>  
                  <h1 >{product.productName}</h1>
                  <p className={`text-primary fw-bold fs-3 fs-md-4 fs-lg-4 mt-3 text-center bg-warning p-2`}>HKD {product.price.originalPrice}</p>
                </div>
              </div>
            </div>
        </Link>

        <AddCartButton id={product.id}/>                              
    </>
  )
}

export default ProductItem
