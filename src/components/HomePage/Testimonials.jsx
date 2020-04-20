import React,{useState} from 'react';
import {Carousel} from "react-bootstrap";
import PiFarmLogo from "../../images/Pifarm.png";
import PiFarmLogo1 from "../../images/Pifarm (1).png";
import PiFarmLogo2 from "../../images/Pifarm (2).png";


export default function Testimonials() {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    //   <Container fluid>
    //       <Row>
                 <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={PiFarmLogo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={PiFarmLogo1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className = "d-block w-responsive text-center mx-auto p-3 mt-2"
          src={PiFarmLogo2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //       </Row>
    //   </Container>
   
  );
}
