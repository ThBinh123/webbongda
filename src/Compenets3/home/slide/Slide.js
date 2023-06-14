import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../../../imgsProduct/giayNike3.jpg"
import image2 from "../../../imgsProduct/giayNike.jpg"
import image3 from "../../../imgsProduct/giayAdidasKd.jpg"
import "./Slide.css"

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='slide' style={{with:"100%"}}>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className='slide-box' >
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
          style={{with:"100%"}}
        />
        <Carousel.Caption >
          <h3>GIÀY ADIDAS</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide-box'>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          style={{with:"100%"}}
        />

        <Carousel.Caption>
          <h3>GIÀY NIKE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slide-box'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          style={{with:"100%"}}
        />

        <Carousel.Caption>
          <h3>GIÀY PUMA</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default ControlledCarousel;