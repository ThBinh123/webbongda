import { AppContext } from "../../AppContext";
import { useContext } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import "./Product2.css";

export default function Product2() {
    const { product2, addCart2,filterList,setCheck ,handle_sweel} = useContext(AppContext);
    return (
        <div className="container">
            <div><button onClick={()=>setCheck(1)}>Loc</button></div>
            <h1>TẤT CẢ SẢN PHẨM</h1>
            <div className="row">
                {product2 && filterList(product2).map((item, key) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item " >
                        <div class="card" key={key}>
                            <img src={item.imageUrl} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.Name}</h5>
                                <p class="card-text">{item.Buy} vnd</p>
                                <a href="#" class="btn btn-primary" onClick={()=>addCart2(item.id)}>Thêm Vào Giỏ Hàng</a>
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
import image1 from "../../imgsProduct2/bangkeodumau.jpg";
import image2 from "../../imgsProduct2/bangkeotrang.jpg";
import image3 from "../../imgsProduct2/bongdongluc.jpg";
import image4 from "../../imgsProduct2/bongfifa.jpg";
import image5 from "../../imgsProduct2/bongworldcup2022.jpg";
import image6 from "../../imgsProduct2/combotatdai.jpg";
import image7 from "../../imgsProduct2/gangtayadidas.jpg";
import image8 from "../../imgsProduct2/gangtayadidas2.jpg";
import image9 from "../../imgsProduct2/gangtayadidas3.jpg";
import image10 from "../../imgsProduct2/gangtaynike.jpg";
import image11 from "../../imgsProduct2/gangtaynike2.jpg";
import image12 from "../../imgsProduct2/gangtaynike3.jpg";
