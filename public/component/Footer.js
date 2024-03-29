import React from 'react'

function Footer() {
  return (
    <footer className={`d-flex justify-content-center align-items-center fw-bold w-100 p-2 bg-success bg-opacity-75 fs-5`}>
      <p className='h-100 text-center' style={{fontSize:`max(15px,.4vw)`}} >
        E-commerce Template is created by Derek Yip without any commercial purposes | Copyright &copy; 2022 DerekYip. All right reserved.
        <br/>Products' images and details are copied from Amazon.com, Amazon.com reserved all right.
      </p>
    </footer>
  )
}

export default Footer