import React from 'react'
import CategoriesCanvas from '../../public/component/CategoriesCanvas/CategoriesCanvas'
import ProductCanvas from '../../public/component/ProductCanvas/ProductCanvas'
import Slider from '../../public/component/Slider'

function Product() {
  return (
    <div>
      <Slider 
        interval={'4000'}
        ImgList={[
        '/img/Slider/SliderImg_01.jpg',
        '/img/Slider/SliderImg_02.jpg',
        '/img/Slider/SliderImg_03.jpg',
        '/img/Slider/SliderImg_04.jpg']}
      />

      <section className={`d-flex flex-column px-5 py-5 col-lg-11`}>
        <figure className="text-end">
          <blockquote className="blockquote">
            <p className='display-3' style={{fontFamily:'var(--Montserrat)', color:'var(--font-highlight)'}}>A well-known quote, contained in a blockquote element.</p>
          </blockquote>
          <figcaption className="blockquote-footer fs-3 mt-1" style={{fontFamily:'var(--Playfair)', color:'var(--font-color)'}}>
              The best product in online store ever !!
          </figcaption>
        </figure>
      </section>

      <ProductCanvas />
      <CategoriesCanvas/>
    </div>
  )
}

export default Product