import adidas from "../../imgsProduct/giayAdidas.jpg"
import ControlledCarousel from "./slide/Slide"
import DarkVariantExample from "./slide_footer/slide_footer"
import "./Home.css"
import image1 from "../../imgsProduct/Puma_logo.jpg"
import image2 from "../../imgsProduct/nike_logo_black.png"
import image3 from "../../imgsProduct/logo-adidas-vector.png"
import { AiTwotoneStar } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import imageFooter from "./banner-top.jpg"
import messi from "./lionel-messi.jpg"
import kevin from "./kevin.jpg"
import ramos from "./ramos.jpg"
import vini from "./vini.jpg"
export default function Home() {
    return (
        <div className="home">
            <div className="box-home">
                <h1> SẢN PHẨM NỔI BẬT</h1>
                <div className="Slide"> <ControlledCarousel /></div>
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
                    <h1>0789.970.962</h1>
                    <p>Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</p>

                </div>
                <div className="box-footer">
                    <h3>HỆ THỐNG CỬA HÀNG</h3>
                    <div><DarkVariantExample /></div>

                </div>
                <div className="box-footer">
                    <h3>KHÁCH HÀNG NỔI TIẾNG</h3>
                    <img src={imageFooter}></img>

                </div>

            </div>
        </div>

    )
}
