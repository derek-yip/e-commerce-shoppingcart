import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CartItem from './CartItem'

function ShoppingCartOffCanvas() {
  const {cartItem,cartTotal} = useShoppingCart()

  return (
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title h1" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
      <button type="button" className="btn-close fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body position-relative">
        {
          cartItem.map((items)=>{
            return(
              <CartItem key={items.id} {...items}/>
            )
          })
        }
        <div className={`bg-primary w-100 h-25 d-flex flex-column align-items-center justify-content-center p-3 text-white`}>
          <h1>Total : {cartTotal}</h1>
        </div>
    </div>
  </div>
  )
}

export default ShoppingCartOffCanvas
