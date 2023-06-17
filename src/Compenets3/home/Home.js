
import ControlledCarousel from "./slide/Slide"
import DarkVariantExample from "./slide_footer/slide_footer"
import "./Home.css"
import image1 from "../../imgsProduct/Puma_logo.jpg"
import image2 from "../../imgsProduct/nike_logo_black.png"
import image3 from "../../imgsProduct/logo-adidas-vector.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Swiper from "./swiper/Swiper"
import imageFooter from "./banner-top.jpg"
import messi from "./lionel-messi.jpg"
import kevin from "./kevin.jpg"
import ramos from "./ramos.jpg"
import vini from "./vini.jpg"
import shopee from "./logo_shopee_img.webp"

import { FaFacebook, FaInstagramSquare, FaYoutube, FaTiktok } from "react-icons/fa";
export default function Home() {
    return (
        <div className="home">
            <div className="box-home">

                <div className="Slide"> <ControlledCarousel /></div>
            </div>
            <h1> SẢN PHẨM NỔI BẬT</h1>
            <div className="products-hot">
                <Swiper />
            </div>

            <div className="text">
                <h1>Sản Phẩm Theo Thương Hiệu</h1>
            </div>
            <div className="contain">
                <div className="box">
                    <img src={image1}></img>
                </div>
                <div className="box">
                    <img src={image2}></img>
                </div>
                <div className="box">
                    <img src={image3}></img>
                </div>

            </div>
            <h1>SẢN PHẨM THEO VỊ TRÍ</h1>
            <div className="main">

                <div className="box-main">
                    <img src={messi}></img>
                    <p>Tiền Đạo</p>
                </div>
                <div className="box-main">
                    <img src={kevin}></img>
                    <p>Tiền Vệ Trung Tâm</p>
                </div>
                <div className="box-main">
                    <img src={vini}></img>
                    <p>Tiền Đạo Chạy Cánh</p>
                </div>
                <div className="box-main">
                    <img src={ramos}></img>
                    <p>Hậu Vệ</p>
                </div>
            </div>
            <div className="footer">
                <div className="box-footer">
                    <h3>HỖ TRỢ</h3>
                    <p>GỌI TƯ VẤN ĐẶT HÀNG ONLINE(08:30-21:00 MỖI NGÀY)</p>
                    <h4 style={{ color: "#f39c12" }}>0789.970.962</h4>
                    <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>
                    <a><img src={shopee} style={{ width: "50%" }}></img></a>
                    <p>Theo Dõi Chúng Tôi Trên Các Nền Tảng</p>
                    <div className='internet'>
                        <a><FaFacebook /></a>
                        <a><FaInstagramSquare /></a>
                        <a><FaYoutube /></a>
                        <a><FaTiktok /></a>
                    </div>

                </div>
                <div className="box-footer">
                    <h3>HỆ THỐNG CỬA HÀNG</h3>
                    <div><DarkVariantExample /></div>

                </div>
                <div className="box-footer">
                    <h3>KHÁCH HÀNG NỔI TIẾNG</h3>
                    <img src={imageFooter} ></img>

                </div>

            </div>
        </div>

    )
}
