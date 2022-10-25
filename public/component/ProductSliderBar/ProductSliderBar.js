import React from 'react'
import Image from 'next/image'
import ProductSLiderBarStyle from '../../../styles/scss/ProductSliderBar.module.scss'
import Link from 'next/link'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

function ProductSliderBar(props) {
  const {
    List = props.List
  } = props

  return (
      <Swiper
      modules={[Navigation,Pagination]}
      spaceBetween={0}
      slidesPerView={4}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
        {
          List.map((product)=>{
            return(
            <SwiperSlide>
                <div key={product.id} className={`product_item_outer mx-auto ${ProductSLiderBarStyle.product_item_outer}`}>
                  <Link href={`/product/${product.categories}/${product.id}`}>
                      <div key={product.id} className={`pointer product_item p-5 ${ProductSLiderBarStyle.product_item}`}>
                        <Image src={`/img/product/${product.img_url}`} width={500} height={500}/>
                        <div className={`productDetail`}>  
                          <h1 className={`h3`}>{product.productName}</h1>
                          <p className={`text-primary fw-bold fs-4 text-center bg-warning mw-30`}>HKD {product.price.originalPrice}</p>
                        </div>
                      </div>
                  </Link> 
                </div>
            </SwiperSlide>  
            )
          })
        }
    </Swiper>
  )
}

export default ProductSliderBar