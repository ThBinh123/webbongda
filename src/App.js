import { AppProvider } from "./AppContext";
import "./App.css";
import Home from "./Compenets3/home/Home"
import Product from "./Compenets3/product/Product";
import Cart from "./Compenets3/cart/Cart";
import Product2 from "./Compenets3/product2/Product2";
import Movie from "./Compenets3/header/Movie";
import Size from "./Compenets3/size/size";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
      <AppProvider>
        <Movie />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/TrangChu" element={<Home />}></Route>
          <Route path="/SanPham" element={<Product />}></Route>
          <Route path="/PhuKien" element={<Product2 />}></Route>
          <Route path="/GioHang" element={<Cart />}></Route>
          <Route path="/Huong-Dan-Chon-Size" element={<Size />}></Route>
        </Routes>
      </AppProvider>



    </div>
  )
}
export default App;