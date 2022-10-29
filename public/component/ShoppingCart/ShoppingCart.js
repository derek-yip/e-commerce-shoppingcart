import React from 'react'
import {HiShoppingBag} from 'react-icons/hi'
import { useShoppingCart } from '../../../context/ShoppingCartContext'
import ShoppingCartStyle from '../../../styles/scss/ShoppingCart.module.scss'
import CartItem from './CartItem'

function ShoppingCart() {

  const {cartItem,cartQuantity} = useShoppingCart()

  return (
    <div className={`ShoppingCart`}>
      <button className={`border border-0 bg-transparent position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <icon className={` ${ShoppingCartStyle.CartIcon}`}><HiShoppingBag/></icon>
        <div className={`d-flex align-items-center justify-content-center ${ShoppingCartStyle.cartQuantityCircle}`}>
          <p>{cartQuantity}</p>
        </div>
      </button>
      
      <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title h1" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
        <button type="button" className="btn-close fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
          {
            cartItem.map((items)=>{
              return(
                <CartItem key={items.id} {... items}/>
              )
            })
          }
      </div>
    </div>
    </div>
  )
}

export default ShoppingCart