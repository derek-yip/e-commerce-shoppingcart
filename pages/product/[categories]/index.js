import React from 'react';
import ProductSliderBar from '../../../public/component/ProductSliderBar/ProductSliderBar';
import Link from 'next/link';

function categories({ productList, categories }) {
  return (
    <div className={`${categories}`}>
      <ProductSliderBar List={productList} />

      <button className={`w-80 h-100`}>
        <Link href={'/product/categories'}> Back </Link>
      </button>
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
    },
  };
}
