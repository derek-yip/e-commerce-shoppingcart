import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ProductCanvasStyle from '../../../styles/scss/ProductCanvas.module.scss'
import ProductList from './ProductItems.json'
import Link from 'next/link'

function ProductCanvas() {

    function ImgChanged(e) {
        const productItem_wrapper = document.querySelectorAll(".productItem_wrapper")[e];
        const targetImg = document.querySelector('.productCanvas_inner img');
        targetImg.src = productItem_wrapper.getAttribute('productimg')
        console.log(targetImg.src);
        
    }

    return (
    <div className={`productCanvas`} >
        <div className={`productCanvas_wrapper row d-flex`}>
            <div className={`col-md-4 col-sm-5 bg-primary bg-opacity-25 p-5 shadow-lg d-flex justify-content-center align-items-center`}>
                <div className={`productCanvas_inner d-flex justify-content-center align-items-center ${ProductCanvasStyle.productCanvas_inner}`}>
                    <img src={`/img/product/Green Capsules.png`} alt='productDemo'></img>
                </div>
            </div>
            <div className={`col-md-8 col-sm-5 bg-primary bg-opacity-50 mt-5 rounded-end p-0`}>
                {
                    ProductList.map((items,index)=>{
                        return(
                             <div key={index} className={`productItem_wrapper w-100 d-flex flex-column align-items-end ${ProductCanvasStyle.productItem_wrapper}`} 
                                style={{"--bk-color":`${items.color}`,"--productNum":`${index + 1}` }} 
                                productimg={items.image_url} onMouseEnter={(e)=>{ImgChanged(index)}}
                            >
                                <p className="h1 mb-0 border-bottom text-end w-75 border-dark text-uppercase">
                                    {items.product}
                                </p>
                            </div>
                        )
                    })
                }
                <div className={`col-sm-12 d-flex justify-content-end align-items-center`}>
                    <Link href={'/product/categories'}>
                        <a className={`d-flex justify-content-end align-items-center ${ProductCanvasStyle.arrowCover}`}>
                            <span className='h2 me-3 fw-light'>View More</span>
                            <Image src={'/img/components/button/iconmonstr-arrow-right.png'} width={50} height={50} />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCanvas