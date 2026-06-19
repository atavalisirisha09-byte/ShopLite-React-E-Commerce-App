import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <nav style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#111",
        color: "white"
      }}>
        <Link to="/home" style={{ color: "white" }}>Home</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;