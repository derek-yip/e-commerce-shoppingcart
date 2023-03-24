import React, { useEffect } from 'react';
import ProductSliderBar from '../../public/component/ProductSliderBar/ProductSliderBar';
// import { useShoppingCart } from '../../public/context/ShoppingCartContext';

function categories({ ProductData }) {
  // const { setProductData } = useShoppingCart();
  // useEffect(() => {
  //   setProductData(ProductData.ProductData);
  // }, []);

  return (
    <div>
      <ProductSliderBar List={ProductData} />
    </div>
  );
}

export default categories;

export async function getServerSideProps() {
  const response = await fetch(`https://derekyip.site/api/products`);

  const data = await response.json();
  return {
    props: {
      ProductData: data,
    },
  };
}
