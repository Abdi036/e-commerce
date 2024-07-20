import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Phone from "./pages/Phone";
import Laptops from "./pages/Laptops";
import Tablets from "./pages/Tablets";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Signin from "./pages/Signin";
import { CartProvider } from "./context/CartContext";
import Signup from "./pages/Signup";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/phones" element={<Phone />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/tablets" element={<Tablets />} />
          <Route path="/products" element={<Product />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
