import adidas from "../../imgsProduct/giayAdidas.jpg"
import ControlledCarousel from "./slide/Slide"
import "./Home.css"
export default function Home() {
    return (
        <div className="home">
            <h1> SẢN PHẨM ADIDAS </h1>
           
            <div className="Slide"> <ControlledCarousel/></div>
      </div>
    )
}