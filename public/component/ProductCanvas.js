import React from 'react'

function ProductCanvas() {
  return (
    <canvas className={`productCanvas container`}>
        <div className={`row justify-content-around`}>
            <div className={`col-6`}>
                <Image src={``} alt='productDemo' width={1000} height={500}/>
            </div>
            <div className={`col-5`}>
            
            </div>
        </div>
    </canvas>
  )
}

export default ProductCanvas