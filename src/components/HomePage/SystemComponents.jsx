import React,{useState} from 'react';
import {Carousel,Container} from "react-bootstrap";
import CarouselImg1 from "../../images/Carousel/SmallImages/1.png";
import CarouselImg2 from "../../images/Carousel/SmallImages/2.png";
import CarouselImg3 from "../../images/Carousel/SmallImages/3.png";
import CarouselImg4 from "../../images/Carousel/SmallImages/4.png";
import CarouselImg5 from "../../images/Carousel/SmallImages/5.png";
import CarouselImg6 from "../../images/Carousel/SmallImages/6.png";


export default function SystemComponents() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="">
    <Container>
        <Carousel interval={3000} fade={true} indicators={false} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>PiFarm System Prototype</h3>
          <p>Grows 60 plants at a time</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Soil Moisture Sensor</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>pH Sensor</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Turbidity Sensor</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg4}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>All Sensors Connected</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={CarouselImg5}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>Commerical Scale System</h3>
          <p>Grows 360 plants at full capacity</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </Container>
       
  </section>
   
   
  );
}
