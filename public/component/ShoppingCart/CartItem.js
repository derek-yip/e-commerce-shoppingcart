import React from 'react'
import storeItems from '../../../db.json'
import Image from 'next/image';
import { useShoppingCart } from '../../context/ShoppingCartContext';

function CartItem({id,quantity}) {
    const {RemoveFromCart, DecreaseCartTotal} = useShoppingCart();
    
    const item = storeItems.ProductList.find(item => item.id === id)
    if (item == null) return null
    
    return (
        <div className='border-info border-bottom pb-3 d-flex flex-column align-items-center'>
            <div className="hstack gap-3 m-2">
                <div className={`position-relative d-flex align-items-center`} style={{height:"75px",width:"125px"}}>
                    <Image src={`/img/product/${item.img_url}`} alt={``} width={100} height={125} layout={`fixed`} objectFit={`cover`} />
                </div>
                <div className={`d-flex flex-column w-50`}>
                    <p>{item.productName}</p>
                </div>
                <div className={`d-flex flex-column align-items-center`}>
                    <p className={`fs-2 text-center text-danger`}>({quantity})</p>
                    <p className=' text-center text-primary fw-bold border-1 border-dark border-bottom'>HKD$ {item.price.discountPrice}</p>
                    <p className='text-success text-center text-primary fw-bold fs-3'>{quantity * item.price.discountPrice}</p>
                </div>
            </div>
            <button className={`bg-danger text-white px-2 w-75 fs-5`} onClick={()=>{RemoveFromCart(id); DecreaseCartTotal(item.price.discountPrice * quantity)}}>Remove</button>

        </div>
        
  )
}

export default CartItem
