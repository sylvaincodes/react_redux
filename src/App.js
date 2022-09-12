import  Home  from "./pages/Home.js";
import Product from "./pages/Product.js";
import ProductDetail from "./pages/ProductDetail.js";
import ProductCat from "./pages/ProductCat.js";
import Cart from "./pages/Cart.js";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="products/:category" element={<ProductCat />} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
