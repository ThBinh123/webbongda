import adidas from "../../imgsProduct/giayAdidas.jpg"
import ControlledCarousel from "./slide/Slide"
import "./Home.css"
import image1 from "../../imgsProduct/Puma_logo.jpg"
import image2 from "../../imgsProduct/nike_logo_black.png"
import image3 from "../../imgsProduct/logo-adidas-vector.png"
import { AiTwotoneStar } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return (
        <div className="home">
            <h1> SẢN PHẨM NỔI BẬT Nhất </h1>
            <div className="Slide"> <ControlledCarousel /></div>
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
            </div>
    )
}
