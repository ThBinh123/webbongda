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

            <div className="Shop1">
            <img src={logo} className="logo"></img>
            <div className="search">
            <input placeholder="Tìm Kiếm..."></input>
            <button>Tìm</button>
            </div>
            
           
            <Link className="shop_pt" to="/GioHang"><FaShoppingCart/> <span className="length">{cart.length}</span></Link>
            </div>

           <div className="Shop2">
            <Link className="shop_pt" to="/TrangChu">Trang Chủ</Link>
            <Link className="shop_pt" to="/SanPham">Sản Phẩm</Link>
            <Link className="shop_pt" to="/PhuKien">Phụ Kiện</Link>
            <Link className="shop_pt" to="/Huong-Dan-Chon-Size">CÁCH CHỌN SIZE GIÀY</Link>
            <Link className="shop_pt" to="/PhuKien" style={{background:"red"}}>SALE MẠNH</Link>
            
            </div>
            
            
        </div>
    );
};