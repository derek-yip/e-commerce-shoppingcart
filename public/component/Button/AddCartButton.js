import React, { useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import AddCartButtonStyle from '../../../styles/scss/Button/AddCartButton.module.scss'

function AddCartButton(props) {
  const {
    id = props.id,
    quantity=props.quantity,
    price = props.price
} = props

  const {
    AddCartQuantity,
    DecreaseCartQuantity,
    RemoveFromCart,
    AddCartTotal,
    DecreaseCartTotal
  } = useShoppingCart()

  return (
    <>
    {
      quantity===0?
        <div className={`pointer AddCartButton w-100 text-center fw-normal fs-2 text-uppercase border border-dark rounded ${AddCartButtonStyle.AddCartButton}`}
        onClick={()=>{AddCartQuantity(id); AddCartTotal(price);}}>
            Add To Cart
        </div>
      :
        <div className={`d-flex align-items-center flex-column w-100`} style={{gap:'.5rem', transition:'none'}}>
          <div className={`d-flex flex-grow-1 w-100 justify-content-evenly align-items-center fs-1`} style={{gap:'.5rem'}}>  
            <button className='px-3' onClick={()=>{DecreaseCartQuantity(id); DecreaseCartTotal(price);}}>-</button>
            <p>{quantity}</p>
            <button className='px-3' onClick={()=>{AddCartQuantity(id); AddCartTotal(price);}}>+</button>
          </div>
          <button className={`bg-danger text-white p-2 w-100`} onClick={()=>{RemoveFromCart(id); DecreaseCartTotal(price * quantity)}}>Remove</button>   
        </div>
    }
    </>
  )
  
}

export default AddCartButton
