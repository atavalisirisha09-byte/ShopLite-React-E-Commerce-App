import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  return (
    <h2>
      Product Id : {id}
    </h2>
  );
};

export default ProductDetails;