import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { useParams } from "react-router-dom";
import Cart from "../cart/Cart";
import "./Oder.css"
export default function Oder() {
    const { addCart, handle_sweel2, card, Oderlist, ChangeOder } = useContext(AppContext);
    const { id } = useParams();
    const [Oder, setOder] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const getOder = async () => {
            setLoading(true);
            const response = await fetch(`https://645cda6b250a246ae3103b6a.mockapi.io/List/${id}`)
            setOder(await response.json());
            const response2=await fetch(`https://645cda6b250a246ae3103b6a.mockapi.io/products/${id}`)
            setOder(await response2.json());
            setLoading(false);
        }
        getOder();
    }, []);
    const Loading = () => {
        return (
            <>
                loading.....
            </>
        )
    }
    const Show = () => {
        return (
            <div style={{ width: "90%", display: "flex" }} className="show">
                <div>
                    <img src={Oder.imageUrl} alt={Oder.title} style={{ width: "20%" }}></img>
                    <p style={{ width: "40%" }}>
                        {Oder.Name}
                    </p>
                    <p>{Oder.qty}</p>
                    <p style={{ width: "20%" }}>
                        {Oder.Buy}vnd
                    </p>
                </div>
            </div>
        )
    }
    const Show2 = () => {
        return (
            <div style={{ width: "90%", display: "flex" }} className="show">
            
                    <img src={Oder.imageUrl} alt={Oder.title} style={{ width: "20%" }}></img>
                    <p style={{ width: "40%" }}>
                        {Oder.Name}
                    </p>
                    <p style={{ width: "20%" }}>
                        {Oder.Buy} vnd
                    </p>
            </div>
        )
    }

    return (
        <div className="row" id="Oder" style={{ width: "100%" }}>
           <div className="col-md-6" id="ship_pay" >
                <div>
                    <h3>FOOTBAL STORE</h3>
                    <p>Giỏ Hàng / Thông Tin Giao Hàng </p> 
                    <p>Bạn Đã Có Tài Khoản? <a>Đăng Nhập</a></p>
                
                </div>
               
                <input placeholder="Họ và tên" style={{width:"100%"}}></input>
                <div className="mail">
                    <input placeholder="Email" style={{width:"70%"}} className="email"></input>
                    <input placeholder="Số điện thoại" style={{width:"25%"}} className="sdt"></input>
                </div>
                <div style={{width:"100%"}} className="ship_home">
                    <p>Giao Hàng Tận Nơi</p>
                    <input placeholder="Địa Chỉ Giao Hàng"></input>
                </div>
                <h5>Phương Thức Vận Chuyển</h5>
                <div className="shiper" style={{width:"100%"}}>
                    <input type="radio" value="Giao Hàng Nhanh" id="html" name="fav_language"></input> <p>Giao Hàng Nhanh</p>
                    <input type="radio" value="Giao Hàng Tiết Kiệm" id="html" name="fav_language"></input><p>Giao Hàng Nhanh</p>
                </div>
                <h5>Phương Thức Thanh Toán</h5>
                <div className="shiper_pay" style={{width:"100%"}}>
                    <div className="select"><input type="radio" value="Thanh Toán Tại Nhà" id="html" name="fav_language1"></input><p>Thanh Toán Tại Nhà</p></div>
                    <input type="radio" value="Chuyển Khoản" id="html" name="fav_language1"></input><p>Chuyển Khoản</p>
                </div>
                <div><button>Đặt Hàng</button></div>

            </div>
            <div className="col-md-6">
                <Show2 />
                <div className="voucher">
                    <input placeholder="Mã Giảm Giá"></input>
                    <button>Sử dụng</button>
                </div>
                <div>
                    <div className="ship">
                        <div style={{ display: "flex" }} className="ship1">
                            <p>Tạm tính  </p>
                            <h5>{Oder.Buy} vnd </h5>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex" }} className="ship1">
                    <p> Phí vận chuyển </p>
                    <h5> {Oder.ship} vnd</h5>
                </div>
                <div className="oder">
                    <p>Tổng Cộng  </p>
                    <h4>{Oder.Buy} vnd</h4>
                </div>

            </div>

        </div>









    )
}