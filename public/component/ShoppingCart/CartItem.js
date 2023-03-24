import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useShoppingCart } from '../../context/ShoppingCartContext';
// import productData from '../../../data.json';

function CartItem({ id, quantity }) {
  const { RemoveFromCart, DecreaseCartTotal, productData } = useShoppingCart();
  const [CartItem, setCartItem] = useState(null);

  useEffect(() => {
    if (productData) {
      const ProductList = productData.ProductList;
      const item = ProductList.find((item) => item._id === id);

      setCartItem((cart) => {
        if (item == null) return null;
        return item;
      });
    }
  }, [productData]);


  if (!CartItem) {
    return <div>loading . . .</div>;
  }

  return (
    <div className='border-info border-bottom pb-3 d-flex flex-column align-items-center'>
      <div className='hstack gap-3 m-2'>
        <div
          className={`position-relative d-flex align-items-center`}
          style={{ height: '75px', width: '125px' }}
        >
          <Image
            src={`/img/product/${CartItem.img_url}`}
            alt={``}
            width={100}
            height={125}
            layout={`fixed`}
            objectFit={`cover`}
          />
        </div>
        <div className={`d-flex flex-column w-50`}>
          <p>{CartItem.productName}</p>
        </div>
        <div className={`d-flex flex-column align-items-center`}>
          <p className={`fs-2 text-center text-danger`}>({quantity})</p>
          <p className=' text-center text-primary fw-bold border-1 border-dark border-bottom'>
            HKD$ {CartItem.price.discountPrice}
          </p>
          <p className='text-success text-center text-primary fw-bold fs-3'>
            {quantity * CartItem.price.discountPrice}
          </p>
        </div>
      </div>
      <button
        className={`bg-danger text-white px-2 w-75 fs-5`}
        onClick={() => {
          RemoveFromCart(id);
          DecreaseCartTotal(CartItem.price.discountPrice * quantity);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
