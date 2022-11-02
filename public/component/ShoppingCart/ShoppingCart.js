import React from 'react'
import {HiShoppingBag} from 'react-icons/hi'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import ShoppingCartStyle from '../../../styles/scss/ShoppingCart.module.scss'
import dynamic from 'next/dynamic' 

function ShoppingCart() {

  const {cartQuantity} = useShoppingCart()

  return (
    <div className={`ShoppingCart`}>
      <div className={`border border-0 bg-transparent position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <div className={` ${ShoppingCartStyle.CartIcon}`}><HiShoppingBag/></div>
        <div className={`d-flex align-items-center justify-content-center ${ShoppingCartStyle.cartQuantityCircle}`}>
          <p>{cartQuantity}</p>
        </div>
      </div>
    </div>
  )
}

export default dynamic(()=>Promise.resolve(ShoppingCart), {ssr:false})