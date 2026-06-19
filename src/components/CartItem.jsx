import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {

  const { removeFromCart } = useCart();

  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>₹{item.price}</p>

      <button onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;