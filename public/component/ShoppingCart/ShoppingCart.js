import React from 'react'
import {HiShoppingBag} from 'react-icons/hi'
import ShoppingCartStyle from '../../../styles/scss/ShoppingCart.module.scss'

function ShoppingCart() {
  return (
    <div className={`ShoppingCart`}>
      <button className={`border border-0 bg-transparent`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <icon className='px-5 py-2'><HiShoppingBag/></icon>
      </button>
      <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title h1" id="offcanvasWithBothOptionsLabel">Shopping Cart</h5>
        <button type="button" class="btn-close fs-5" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
          
      </div>
    </div>
    </div>
  )
}

export default ShoppingCart