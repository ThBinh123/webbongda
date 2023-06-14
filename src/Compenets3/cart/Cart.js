import { useContext } from "react"
import { AppContext } from "../../AppContext"
import "./Cart.css";
import { Row } from "react-bootstrap";

export default function Cart() {
    const { ChangeQty, cart, changeMinus, changeSum, DeleteMode, handle_sweel } = useContext(AppContext)
    console.log(cart);
    return (

        <table className="carts">
            {
                cart && cart.map((item, index) =>
                (
                    <div className="Carts_Box" key={index} >
                        <img src={item.imageUrl} alt="" className="image-carts" />
                        <div className="font_name">{item.Name}</div>
                        <p className="prices">Giá Tiền:<div className="buy">{item.Buy}</div></p>
                        <div className="btn">
                            <div className="btn-box">
                                <a className="btn1" onClick={() => changeSum(item.id)}></a>
                                <div className="qty">{item.qty}</div>
                                <a className="btn2" onClick={() => changeMinus(item.id)}></a>
                            </div>
                        </div>

                        <button className="buy_shop" onClick={handle_sweel}>Buy</button>
                        <div className="Delete" onClick={() => {
                            DeleteMode(item.id)
                        }}>X</div>
                    </div>
                )
                )
            }
        </table>
    )
}