import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductItems from "./pages/ProductItems";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Home from "./pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/products" element={<ProductItems></ProductItems>}></Route>
    <Route path="/product" element={<SingleProduct></SingleProduct>}></Route>
    <Route path="/cart" element={<Cart></Cart>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
   </Routes>
  </BrowserRouter>
  );
}

export default App;
