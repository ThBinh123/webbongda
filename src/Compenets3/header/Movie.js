import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import "./Movie.css";
import logo from "./logo.png"
export default function Movie() {
    const { cart } = useContext(AppContext)
    return (
        
        <div className="Shop">
            <img src={logo} className="logo"></img>
            <Link className="shop_pt" to="/TrangChu">Trang Chủ</Link>
            <Link className="shop_pt" to="/SanPham">Sản Phẩm</Link>
            <Link className="shop_pt" to="/PhuKien">Phu Kien</Link>
            <Link className="shop_pt" to="/GioHang"><FaShoppingCart/> <span className="length">{cart.length}</span></Link>
        </div>
    );
};