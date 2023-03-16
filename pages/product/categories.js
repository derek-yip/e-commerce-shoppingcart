import React from 'react';
import ProductSliderBar from '../../public/component/ProductSliderBar/ProductSliderBar';
import productData from "../../data.json";

function categories() {
  return (
    <div>
      <ProductSliderBar List={productData} />
    </div>
  );
}

export default categories;