import React from 'react';
import ProductSliderBarStyle from '../../../styles/scss/Slider/ProductSliderBar.module.scss';
import ProductItem from './ProductItem';
import Link from 'next/link';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';

function ProductSliderBar(props) {
  const { List = props.List } = props;

  const categoriesSet = new Set();

    const ProductList = List.ProductList;
    ProductList.forEach((product) => {
      categoriesSet.add(product.categories);
    });

  const categoriesArry = Array.from(categoriesSet);
  
  if (!List) {
    return(
      <div>
        Loading
      </div>
    )
  }

  return (
    <div>
      {categoriesArry.map((category, index) => {
        return (
          <div key={index}>
            <Link href={`/product/${category}`}>
              <div
                className={`${ProductSliderBarStyle.categoriesTitle} pointer fw-bold px-sm-5 py-2 text-uppercase text-white text-center border border-start-0 rounded-end`}
              >
                {category}
              </div>
            </Link>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={0}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                320: { slidesPerView: 1, slidesPerGroup: 1 },
                768: { slidesPerView: 3, slidesPerGroup: 3 },
                1024: { slidesPerView: 4, slidesPerGroup: 4 },
              }}
            >
              {ProductList.map((product) => {
                return product.categories == category ? (
                  <SwiperSlide key={product._id}>
                    <div
                      className={`mb-5 py-4 px-5 ${ProductSliderBarStyle.product_item}`}
                    >
                      <ProductItem product={product} />
                    </div>
                  </SwiperSlide>
                ) : (
                  ''
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSliderBar;
