import React from 'react'
import AddCartButtonStyle from '../../../styles/scss/Button/AddCartButton.module.scss'

function AddCartButton() {
  return (
        <div className={`pointer AddCartButton w-100 text-center fw-normal fs-2 text-uppercase border border-dark rounded ${AddCartButtonStyle.AddCartButton}`}
        >
            Add To Cart
        </div>
  )
}

export default AddCartButton

