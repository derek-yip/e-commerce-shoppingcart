import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProductItemStyle from '../../../styles/scss/ProductItem.module.scss';
import BackButtonStyle from '../../../styles/scss/Button/BackButton.module.scss'
import AddCartButton from '../../../public/component/Button/AddCartButton';
import { useShoppingCart } from '../../../public/context/ShoppingCartContext';

function Product({ product}) {
  const { getItemQuantity} = useShoppingCart();

  const id = product._id;
  const quantity = getItemQuantity(id);
  const price = product.price.discountPrice;

  // useEffect(() => {
  //   setProductData(ProductData.ProductData);
  // }, []);

  return (
    <div>
      <div
        key={product._id}
        className={`product_wrapper d-flex flex-column flex-sm-row bg-white border border-2 border-primary ${ProductItemStyle.product_wrapper}`}
      >
        <div className={`product_img ${ProductItemStyle.product_img}`}>
          <Image
            src={`/img/product/${product.img_url}`}
            alt={``}
            layout={`fill`}
            objectFit={'contain'}
            priority
          />
        </div>

        <div
          className={`${ProductItemStyle.product_detail} d-flex flex-column align-items-center `}
        >
          <div className={`product_logo ${ProductItemStyle.product_logo}`}>
            <Image
              src={`/img/product/logo/${product.producer.logo}`}
              alt={``}
              layout='fill'
              objectFit={'contain'}
              priority
            />
          </div>
          <div
            className={`border-top border-black ${ProductItemStyle.product_detail_inner}`}
          >
            <h1 className='mb-5 w-100 pe-sm-5'>{product.productName}</h1>
            <p className='mb-5 text-justify'>{product.product_detail}</p>
          </div>
          <AddCartButton id={id} quantity={quantity} price={price} />
        </div>
      </div>

      <Link href={'/product/categories'}>
        <div className={`my-3 mx-5 p-2 pointer border border-dark rounded ${BackButtonStyle.BackButton}`}> Back </div>
      </Link>
    </div>
  );
}

export default Product;

export async function getServerSideProps(context) {
  const { params } = context;
  const { productId } = params;
  const response = await fetch(
    `https://derekyip.site/api/products/${productId}`
  );

  const data = await response.json();
  const product = data.product;

  // const productData = fetch(
  //   `https://derekyip.site/api/products/`
  // );

  // productData = productData.json();

  
  return {
    props: {
      product: product,
      // ProductData: productData
    },
  };
}
