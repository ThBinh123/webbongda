
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagehot1 from "../../../imgsProduct/giay-da-bong-copa.jpg"
import imagehot2 from "../../../imgsProduct/giayPuma.jpg"
import imagehot3 from "../../../imgsProduct/giayAdidasKd1.jpg"
import imagehot4 from "../../../imgsProduct/giayNikeTiempo.jpg"
import imagehot5 from "../../../imgsProduct/giayCr7.jpg"
import { Link } from 'react-router-dom';
import {FaSearchDollar} from "react-icons/fa"

import "./Swiper.css"
function swiper() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >

            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot1} style={{width:"100%",height:"280px"}} ></img>
                <Link to="/SanPham/Giay/3" className='linkswiper'><FaSearchDollar/></Link>
                <h5>Giày Bóng Đá Adidas-Copa</h5>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot2} style={{width:"100%",height:"280px"}}  ></img>
                <Link to="/SanPham/Giay/4" className='linkswiper'><FaSearchDollar/></Link>
                <h5>Giày PUMA Trắng</h5>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot3}  style={{width:"100%",height:"280px"}}></img>
                <Link to="/SanPham/Giay/9" className='linkswiper'><FaSearchDollar/></Link>
                <h5>Giày Adidas Không Dây Xanh</h5>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot4} style={{width:"100%",height:"280px"}}></img>
                <Link to="/SanPham/Giay/12" className='linkswiper'><FaSearchDollar/></Link>
                <h5>Giày Tiempo</h5>
            </SwiperSlide>
            <SwiperSlide className='box-swiper'>
                <img className='image' src={imagehot5}  style={{width:"100%",height:"280px"}}></img>
                <Link to="/SanPham/Giay/11" className='linkswiper'><FaSearchDollar/></Link>
                <h5>Giày CR7</h5>
            </SwiperSlide>

        </ Swiper>
    )
}
export default swiper;