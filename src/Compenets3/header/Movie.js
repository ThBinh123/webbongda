import { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"
import { IoMdContact } from "react-icons/io"
import "./Movie.css";
import logo from "./output-onlinepngtools.png"
export default function Movie() {
    const { cart } = useContext(AppContext)
    return (

        <div className="Shop">
            <p className="since" style={{color:"#fff"}}>FOOTBALLSTORE.COM - SINCE 2012 - LUÔN LUÔN CAM KẾT HÀNG CHÍNH HÃNG</p>
            <div className="Shop1">
                <Link className="logo" to="/"><img src={logo} ></img></Link>
                <div className="search">
                    <input placeholder="Tìm Kiếm..."></input>
                    <button>Tìm</button>
                </div>
                <div className="fashop">
                <Link className="shop_pt" to="/Signin"><IoMdContact /></Link>
                <Link className="shop_pt" to="/GioHang"><FaShoppingCart /><span className="length">{cart.length}</span></Link>
                </div>
                
            </div>
            <div className="Shop2">
                <Link className="shop_pt" to="/">Trang Chủ</Link>
                <Link className="shop_pt" to="/SanPham">Sản Phẩm</Link>
                <Link className="shop_pt" to="/PhuKien">Phụ Kiện</Link>
                <Link className="shop_pt" to="/Huong-Dan-Chon-Size">CÁCH CHỌN SIZE GIÀY</Link>
                <Link className="shop_pt" to="/PhuKien" style={{ background: "red" }}>SALE MẠNH</Link>
            </div>


        </div>
    );
};