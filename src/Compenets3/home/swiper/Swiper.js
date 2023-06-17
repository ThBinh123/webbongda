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
function swiper () {
    return (
        <div>
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
                    <SwiperSlide><img src={imagehot1}></img>
                        <h5>Giày CR7</h5>
                        <p>400.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot2}></img>
                        <h5>Giày PUMA Trắng</h5>
                        <p>800.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot3}></img>
                        <h5>Giày Adidas Không Dây Xanh</h5>
                        <p>300.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot4}></img>
                        <h5>Giày Tiempo</h5>
                        <p>600.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot4}></img>
                        <h5>Giày CR7</h5>
                        <p>400.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot4}></img>
                        <h5>Giày CR7</h5>
                        <p>400.000 vnd</p>
                    </SwiperSlide>
                    <SwiperSlide><img src={imagehot4}></img>
                        <h5>Giày CR7</h5>
                        <p>400.000 vnd</p>
                    </SwiperSlide>

                </Swiper>
        </div>
    )
}
export default swiper;