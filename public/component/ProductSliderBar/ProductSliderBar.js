import React from 'react'
import Image from 'next/image'
import ProductSLiderBarStyle from '../../../styles/scss/ProductSliderBar.module.scss'
import Link from 'next/link'

function ProductSliderBar(props) {
  const {
    List = props.List
  } = props

  return (
    <div className={`productSlider ${ProductSLiderBarStyle.productSlider}`}>
      <div className={`productSlider_inner ${ProductSLiderBarStyle.productSlider_inner}`}>
        {
          List.map((product)=>{
            return(
              <div key={product.id}>
                <Link href={`/product/${product.categories}/${product.id}`}>
                  <div className={`product_item ${ProductSLiderBarStyle.product_item}`}>
                    <Image src={`/img/product/${product.img_url}`} width={500} height={500}/>
                    <h1 className={`h3`}>{product.productName}</h1>
                    <p>{product.product_detail}</p>
                  </div>
                </Link>            
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductSliderBar