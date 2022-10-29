import React from 'react'
import { useShoppingCart } from '../../../context/ShoppingCartContext'
import storeItems from '../../../db.json'
import Image from 'next/image';

function CartItem({id,quantity}) {
    const {RemoveFromCart} = useShoppingCart();
    
    const item = storeItems.ProductList.find(item => item.id === id)
    if (item == null) return null
    
    return (
        <div className="hstack gap-2 border-info border-bottom pb-3">
            <div className={`position-relative d-flex align-items-center`} style={{height:"75px",width:"125px"}}>
                <Image src={`/img/product/${item.img_url}`} width={125} height={125} layout={`fixed`} objectFit={`cover`} />
            </div>
            <div className={`d-flex flex-column w-50 text-center`}>
                <p className='fs-5'>{item.productName}</p>
            </div>
            <div className={`d-flex flex-column align-items-center`}>
                <p className='fs-2 text-center text-danger'>({quantity})</p>
                <p className='fs-5 text-center text-primary fw-bold'>HKD$ {item.price.discountPrice}</p>
                <button className={`bg-danger text-white p-1 w-100 fs-5`} onClick={()=>RemoveFromCart(id)}>Remove</button>
            </div>
        </div>
  )
}

export default CartItem
