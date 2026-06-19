// import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import Skeleton from "../components/Skeleton";
// const Home = () => {

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const { addToCart } = useCart();
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   // FETCH PRODUCTS FROM API
//   useEffect(() => {
//     setLoading(true)
//     fetch("https://dummyjson.com/products")
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data.products);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false);
//       });
//   }, []);

//   const handleAdd = (product) => {

//     if (!user) {
//       alert("Please login first");
//       navigate("/");
//       return;
//     }

//     // map API product to your cart format
//     addToCart({
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       image: product.thumbnail
//     });
//   };

// //   if (loading) {
// //   return (
// //     <div className="product-grid">
// //       {Array(8).fill().map((_, i) => (
// //         <Skeleton key={i} />
// //       ))}
// //     </div>
// //   );
// // }
// if (loading) {
//   return <Skeleton />
// }
//   return (
//     <div className="home-container">

//       <h1 className="title">🛒 ShopLite</h1>

//       <div className="product-grid">

//         {products.map((p) => (
//           <div className="product-card" key={p.id}>

//             <img src={p.thumbnail} alt={p.title} />

//             <h3>{p.title}</h3>

//             <p>₹{p.price}</p>

//             <button onClick={() => handleAdd(p)}>
//               Add to Cart
//             </button>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Skeleton from "../components/Skeleton";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    setLoading(true);

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {

        setTimeout(() => {
          setProducts(data.products);
          setLoading(false);
        }, 1500);

      });

  }, []);

  const handleAdd = (product) => {

    if (!user) {
      alert("Please login first");
      navigate("/");
      return;
    }

    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail
    });
  };

  if (loading) {
    return (
      <div className="product-grid">
        {Array(8).fill().map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="home-container">

      <h1 className="title">🛒 ShopLite</h1>

      <div className="product-grid">

        {products.map(p => (
          <div className="product-card" key={p.id}>

            <img src={p.thumbnail} />

            <h3>{p.title}</h3>

            <p>₹{p.price}</p>

            <button onClick={() => handleAdd(p)}>
              Add to Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Home;