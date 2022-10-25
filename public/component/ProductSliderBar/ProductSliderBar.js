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
      slidesPerView={5}
      navigation={true}
      pagination={{
        clickable: true,
      }}
    >
        {
          List.map((product)=>{
            return(
            <SwiperSlide>
                <Link href={`/product/${product.categories}/${product.id}`}>
                  <div key={product.id} className={`pointer product_item py-3 px-5 ${ProductSLiderBarStyle.product_item}`}>
                    <Image src={`/img/product/${product.img_url}`} width={500} height={500}/>
                    <div className={`productDetail`}>  
                      <h1 className={`h3`}>{product.productName}</h1>
                      <p>{product.product_detail}</p>
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