import React, { useEffect } from 'react';
import ProductSliderBar from '../../../public/component/ProductSliderBar/ProductSliderBar';
import Link from 'next/link';
import BackButtonStyle from '../../../styles/scss/Button/BackButton.module.scss'
// import { useShoppingCart } from '../../../public/context/ShoppingCartContext';

function categories({ productList, categories }) {
  // const { setProductData } = useShoppingCart();
  // useEffect(() => {
  //   setProductData(ProductData.ProductData);
  // }, []);

  return (
    <div className={`${categories}`}>
      <ProductSliderBar List={productList} />

      <Link href={'/product/categories'}>
        <div className={`my-3 mx-5 p-2 pointer border border-dark rounded ${BackButtonStyle.BackButton}`}> Back </div>
      </Link>
    </div>
  );
}

export default categories;

export async function getServerSideProps(context) {
  const { params } = context;
  const { categories } = params;
  const response = await fetch(`https://derekyip.site/api/products/`);

  const categories_array = [];

  const data = await response.json();
  const ProductList = data.ProductList;

  ProductList.forEach((product) => {
    if (product.categories === categories) {
      categories_array.push(product);
    }
  });

  return {
    props: {
      productList: { ProductList: categories_array },
      categories,
      // ProductData : data
    },
  };
}
