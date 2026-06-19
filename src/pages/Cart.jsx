// import { useCart } from "../context/CartContext";

// const Cart = () => {

//   const {
//     cart,
//     removeFromCart,
//     increaseQty,
//     decreaseQty
//   } = useCart();

//   const total = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>🧺 Your Cart</h1>

//       {cart.length === 0 ? (
//         <h3>Cart is empty</h3>
//       ) : (
//         cart.map(item => (
//           <div key={item.id} className="card">

//             <h3>{item.title}</h3>
//             <p>₹{item.price}</p>

//             <p>Qty: {item.qty}</p>

//             <button onClick={() => increaseQty(item.id)}>+</button>
//             <button onClick={() => decreaseQty(item.id)}>-</button>

//             <button onClick={() => removeFromCart(item.id)}>
//               Remove
//             </button>

//           </div>
//         ))
//       )}

//       <h2>Total: ₹{total}</h2>
//     </div>
//   );
// };

// export default Cart;

import { useCart } from "../context/CartContext";

const Cart = () => {

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    total
  } = useCart();

  return (
    <div className="cart-container">

      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is empty</h3>
      ) : (
        cart.map(item => (
          <div className="cart-card" key={item.id}>

            <img src={item.image} width="80" />

            <h3>{item.title}</h3>

            <p>₹{item.price}</p>

            <p>Qty: {item.qty}</p>

            <button onClick={() => increaseQty(item.id)}>+</button>
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>

          </div>
        ))
      )}

      <h2>Total: ₹{total}</h2>

    </div>
  );
};

export default Cart;