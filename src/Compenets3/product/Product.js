import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./Product.css";
import image1 from "../../imgsProduct/giayNike.jpg";
import image2 from "../../imgsProduct/giayAdidas.jpg";
import image3 from "../../imgsProduct/giayPuma.jpg";
import image4 from "../../imgsProduct/giayAdidas1.jpg";
import image5 from "../../imgsProduct/giayAdidas2.jpg";
import image6 from "../../imgsProduct/giayAdidasKd.jpg";
import image7 from "../../imgsProduct/giayAdidasKd1.jpg";
import image8 from "../../imgsProduct/giayCr7.jpg";
import image9 from "../../imgsProduct/giayNike1.jpg";
import image10 from "../../imgsProduct/giayNike3.jpg";
import image11 from "../../imgsProduct/giayNikeTiempo.jpg";
import image12 from "../../imgsProduct/giayPuma2.jpg";
export default function Product() {
    const { product, addCart,filterList,setCheck ,handle_sweel} = useContext(AppContext);
    return (
        <div className="container">
            <div><button onClick={()=>setCheck(1)}>Loc</button></div>
            <h1>TẤT CẢ SẢN PHẨM</h1>
            <div className="row">
                {product && filterList(product).map((item, key) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item " >
                        <div class="card" key={key}>
                            <img src={item.imageUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.Name}</h5>
                                <p class="card-text">{item.Buy} vnd</p>
                                <a href="#" class="btn btn-primary" onClick={()=>addCart(item.id)}>Thêm Vào Giỏ Hàng</a>
                                <div className="product_icon">
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i><AiTwotoneStar /></i>
                                    <i className="review">(1 review)</i>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
         </div>   </div>
    )
}



