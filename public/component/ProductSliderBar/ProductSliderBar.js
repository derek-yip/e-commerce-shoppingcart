import React from 'react'
import Image from 'next/image'
import ProductSLiderBarStyle from '../../../styles/scss/Slider/ProductSliderBar.module.scss'

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
      navigation={true}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        320: { slidesPerView: 1, slidesPerGroup: 1,  },
        768: { slidesPerView: 3 , slidesPerGroup: 3},
        1024: { slidesPerView: 4, slidesPerGroup: 4 },
      }}
    >
        {
          List.map((product)=>{
            return(

            <SwiperSlide>
              <Link href={`/product/${product.categories}/${product.id}`}>
                  <div key={product.id} className={`pointer product_item p-5 mb-5 d-flex flex-column justify-content-between ${ProductSLiderBarStyle.product_item}`}>
                    <Image src={`/img/product/${product.img_url}`} width={500} height={500}/>
                    <div className={`productDetail ${ProductSLiderBarStyle.productDetail}`}>  
                      <h1 className={`d-flex align-items-center`}>{product.productName}</h1>
                      <p className={`text-primary fw-bold fs-3 fs-md-4 fs-lg-4 text-center bg-warning p-2`}>HKD {product.price.originalPrice}</p>
                    </div>
                  </div>
              </Link> 
            </SwiperSlide>  
            )
          })
        }
    </Swiper>
  )
}

export default ProductSliderBar