import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../imgsProduct/slider3.jpg"
import image2 from "../../../imgsProduct/slider2.jpg"
import image3 from "../../../imgsProduct/slider1.jpg"
import "./Slide.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slide'>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slide-box' >
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption style={{color:"#f39c12"}}>
          <h3>GIÀY ADIDAS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide-box'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption style={{color:"#f39c12"}}>
          <h3>GIÀY NIKE</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide-box'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption style={{color:"#f39c12"}}>
          <h3>GIÀY PUMA</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;