import { useState } from "react";
import ProductPresenter from "../presenters/ProductPresenter";
import { products } from "../products";

const ProductContainer = () => {

  const [items] = useState(products);

  return (
    <ProductPresenter
      products={items}
    />
  );
};

export default ProductContainer;
