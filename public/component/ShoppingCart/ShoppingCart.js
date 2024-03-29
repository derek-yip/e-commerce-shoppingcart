import React from 'react'
import {HiShoppingBag} from 'react-icons/hi'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import ShoppingCartStyle from '../../../styles/scss/ShoppingCart.module.scss'
import dynamic from 'next/dynamic' 
function ShoppingCart() {

  const {cartQuantity} = useShoppingCart()

  const fetchAPI = async () => {
    const response = await fetch('https://derekyip.site/api/products');
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={`ShoppingCart`}>
      <div className={`border border-0 bg-transparent position-relative`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <div className={` ${ShoppingCartStyle.CartIcon}`} onClick={fetchAPI}><HiShoppingBag/></div>
        <div className={`d-flex align-items-center justify-content-center ${ShoppingCartStyle.cartQuantityCircle}`}>
          <p>{cartQuantity}</p>
        </div>
      </div>
    </div>
  )
}

export default dynamic(()=>Promise.resolve(ShoppingCart), {ssr:false})

