import React from 'react'
import Image from 'next/image'
import ProductCanvasStyle from '../../styles/scss/ProductCanvas.module.scss'
function ProductCanvas() {

  return (
    <div className={`productCanvas`} >
        <div className={`productCanvas_wrapper row d-flex`}>
            <div className={`col-md-4 col-sm-5 bg-primary bg-opacity-25 p-5 shadow-lg`}>
                <div className='productCanvas_inner'>
                    <Image className={`h-75`} src={`/img/product/GreenCapsules.png`} alt='productDemo' height={`1200`} width={`1000`} layout='intrinsic' />
                </div>
            </div>
            <div className={`col-md-8 col-sm-5 bg-primary bg-opacity-50 mt-5 rounded-end p-0`}>
                <div className={`productItem_wrapper w-100 d-flex flex-column align-items-end ${ProductCanvasStyle.productItem_wrapper}`} >
                    <p class="h1 mb-0 border-bottom text-end w-75 border-dark text-uppercase">
                        Green Capsules
                    </p>
                </div>
                <div className={`productItem_wrapper w-100 d-flex flex-column align-items-end ${ProductCanvasStyle.productItem_wrapper}`} >
                    <p class="h1 mb-0 border-bottom text-end w-75 border-dark text-uppercase">
                        Ocean Greens Calcium Plus
                    </p>
                </div>
                <div className={`productItem_wrapper w-100 d-flex flex-column align-items-end ${ProductCanvasStyle.productItem_wrapper}`} >
                    <p class="h1 mb-0 border-bottom text-end w-75 border-dark text-uppercase">
                        Japn Green Tea
                    </p>
                </div>
                <div className={`productItem_wrapper w-100 d-flex flex-column align-items-end ${ProductCanvasStyle.productItem_wrapper}`} >
                    <p class="h1 mb-0 border-bottom text-end w-75 border-dark text-uppercase">
                        DogSwell Gut Health
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCanvas