import React from 'react'
import Image from 'next/image'
import ProductSliderBarStyle from '../../../styles/scss/Slider/ProductSliderBar.module.scss'

import Link from 'next/link'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import AddCartButton from '../Button/AddCartButton';

function ProductSliderBar(props) {
  const {
    List = props.List
  } = props

  const categoriesSet= new Set();
  List.forEach((product) => {
    categoriesSet.add(product.categories)
  });

  const categoriesArry = Array.from(categoriesSet)
  
  return (
    <>
    {
      categoriesArry.map((category)=>{
        return(
          <>
            <Link href={`/product/${category}`}>
              <div className={`${ProductSliderBarStyle.categoriesTitle} pointer fs-1 fw-bold px-5 py-2 text-uppercase text-white w-25 text-center border border-start-0 rounded-end`}>{category}</div>
            </Link>
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
                  if (product.categories == category) {
                    return(
                      <SwiperSlide>
                        <div className={`mb-5 py-4 px-5 ${ProductSliderBarStyle.product_item}`}>
                          <Link href={`/product/${product.categories}/${product.id}`}>
                            <div className='d-flex flex-column flex-grow-1'>
                              <div key={product.id} className={`pointer product_item d-flex flex-column justify-content-evenly`}>
                                <div className={`position-relative w-100`} style={{height:'300px'}}>                                  
                                  <Image src={`/img/product/${product.img_url}`} layout={`fill`} objectFit={`contain`} />
                                </div>
                                <div className={`productDetail mb-4 d-flex flex-column justify-content-evenly ${ProductSliderBarStyle.productDetail}`}>  
                                  <h1 >{product.productName}</h1>
                                  <p className={`text-primary fw-bold fs-3 fs-md-4 fs-lg-4 mt-3 text-center bg-warning p-2`}>HKD {product.price.originalPrice}</p>
                                </div>
                              </div>
                            </div>
                          </Link> 
                          <AddCartButton/>
                        </div>
                      </SwiperSlide>  
                    )
                  }
                })
              }
          </Swiper>
        </>
        )
      })
    }
  </>
  )
}

export default ProductSliderBar