import { createContext, useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setShow] = useState(false); // ko co show
    const [count, setCount] = useState(1); // ko co count
    //++++++++++++++++++++++++++++++++++++++++++++++++++++
    const [product, setProduct] = useState(null);
    const [product2, setProduct2] = useState(null);
    const [cart, setCart] = useState([]);
    const [cart2, setCart2] = useState([]);
    const [check, setCheck]=useState(0);
    const [check2, setCheck2]=useState(0);
    const getData = async () => {
        const data=`https://645cda6b250a246ae3103b6a.mockapi.io/List`
        axios
            .get(data)
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if (error.response.status == "404") {

                }
            })
    }
    useEffect(() => {
        getData();
    }, []);
    ////Data product2
    const getData2 = async () => {
        const data=`https://645cda6b250a246ae3103b6a.mockapi.io/products`
        axios
            .get(data)
            .then(res => {
                setProduct2(res.data)
                console.log(res.data)
            })
            .catch(error => {
                if (error.response.status == "404") {

                }
            })
    }
    useEffect(() => {
        getData2();
    }, []);
    //++++++++++++++++++++++++++++++++++++++++++
   
    const addCart = async (id) => {
        const kq = product.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)

        if (index >= 0) {
            const newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList))
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }
    }
    //////
    const addCart2 = async (id) => {
        const kq = product2.find((item) => item.id == id)
        const index = cart.findIndex((item) => item.id == id)

        if (index >= 0) {
            const newList = cart;
            newList[index]["qty"]++;
            setCart(newList);
            localStorage.setItem('cart_list', JSON.stringify(newList))
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }])
            localStorage.setItem('cart_list', JSON.stringify([...cart, { ...kq, qty: 1 }]));
        }
    }


    console.log(cart);

    //++++++++++++++++++++++++++++++++++++++++++
    const changeMinus = (id) => {
        const kq = cart.map((item) =>
            id === item.id ? { ...item, qty: item.qty - 1 } : item
          
        );
      
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }
    const changeSum = (id) => {
        const kq = cart.map((item) =>
            id === item.id ? { ...item, qty: item.qty + 1 } : item

        );
        setCart(kq);
        localStorage.setItem('cart_list', JSON.stringify(kq))
    }
    //++++++++++++++++++++++++++++++++++++++++++
    const ChangeQty = (id, num) => {
        const kq = cart.map((item) => (item.id == id && !(num == -1 && item.qty == 1)) ? { ...item, qty: item.qty + num } : item);
        setCart(kq);
    }

    //++++++++++++++++++++++++++++++++++++++++++
    const DeleteMode = (id) => {
        const kq = cart.filter((str) => str.id !== id);
        setCart(kq);
    }
    const filterList = (List)=>{
        if(check ==1){
            return[List[0], List[3],List[4],List[5]];
        } else if(check==2){
            return[List[0], List[3],List[4],List[5],List[8]];
        }else{
            return List;
        }
    }
    const filterList2 = (List)=>{
        if(check2 ==1){
            return[List[0], List[3],List[4],List[5]];
        } else if(check2==2){
            return[List[0], List[3],List[4],List[5],List[8]];
        }else{
            return List;
        }
    }

    //++++++++++++++++++++++++++++++++++++++++++
    const handle_sweel = () => {
        swal({
            title: "Complete!",
            text: "payment methods",
            icon: "success",
            button: "YES",
        });
    }
    return (
        <AppContext.Provider
            value={{
                show,
                count,
                setShow,
                product,
                cart,
                addCart,
                changeMinus,
                changeSum,
                DeleteMode,
                handle_sweel,
                ChangeQty,
                filterList,
                check,
                setCheck,
                product2,
                cart,
                addCart2,
                filterList2,
                setCheck2,
            }}>
            {children}
        </AppContext.Provider>
    )
} 