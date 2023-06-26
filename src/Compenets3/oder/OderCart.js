import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../AppContext"
import { useParams } from "react-router-dom";
import Cart from "../cart/Cart";
import "./OderCart.css"
import totalcart from "../cart/Cart"
export default function OderCart() {
    const { ChangeQty, cart, changeMinus, changeSum, DeleteMode, handle_sweel, addOder } = useContext(AppContext)
    function totalcart(cart) {
        var sumtotal = 0;
        for (var i = 0; i < cart.length; i++) {
            sumtotal += cart[i].Buy * cart[i].qty;
        }
        return sumtotal;

    }
    function numberFormat(nStr) {
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1))
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        return x1 + x2;
    }
    return (
        <div className="row" style={{ width: "100%" }} id="Pay">


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


            <div className="col-md-6" id="product_oder">

                {
                    cart && cart.map((item, index) =>
                    (
                        <div key={index}>
                            <div className="oderCart" style={{ display: "flex" }}>
                                <img src={item.imageUrl} alt="" className="image-carts" />
                                <div className="name_oderCart">{item.Name}</div>
                                <p className="prices_oderCart"><div>{item.Buy}</div></p>
                                <p className="btn_oderCart"> {item.qty} </p>
                                 
                                <p className="sum_oder">
                                    <div>{numberFormat((item.Buy * item.qty).toFixed(3).replace('.', ','))}</div></p>

                            </div>

                        </div>
                    )
                    )
                }
                <div className="voucher_oder">
                    <input placeholder="Mã Giảm Giá"></input>
                    <button>Sử dụng</button>
                    
                </div>
                <div className="ship_oder">
                        <p>Tạm tính: {numberFormat((totalcart(cart)).toFixed(3).replace('.', ','))} vnd </p>
                        <p> Phí vận chuyển: 50,000 vnd </p>
                        <p> Mã giảm giá: 0 vnd </p>
                </div>
                <div className="sum_oderCart">
                    <p>Tổng Cộng: {numberFormat((totalcart(cart)+50).toFixed(3).replace('.', ','))}   vnd</p>
                </div>
            </div>

        </div>
    )
}


                                   


                              