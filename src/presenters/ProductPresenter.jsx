import ProductCard from "../components/ProductCard";

const ProductPresenter = ({ products }) => {

  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductPresenter;