import React,{useState} from "react";
import {Container} from "react-bootstrap";
import testimonials from "./TestimonialData";
import {css,cx} from "emotion";

const Testimonials=()=>{

  const [current,setCurrent]=useState(testimonials[0]);
  
  const [active,setActive]=useState(0);

  const handleSetClick=(event)=>{
    setCurrent(testimonials[event.target.getAttribute("data-testimonial")]);
    setActive(event.target.getAttribute("data-testimonial"));
  }

  return (
    <section className="dark-section">
      <Container fluid>
        <h2 className="section-heading colored-text">Testimonials</h2>

        <div
          className={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px auto;
            max-width: 600px;

            p {
              text-align: center;
              margin-bottom: 20px;
              color: white;
            }

            em {
              text-align: center;
              margin-bottom: 20px;
              color: white;
              font-size:0.8rem;
            }
          `}
        >
          <p className="white-text">{current.testimonial}</p>
          <em className="white-text">
            {current.name}, {current.occupation}
          </em>

          <div
            className={css`
              display: flex;

              span {
                height: 20px;
                width: 20px;
                margin: 0 3px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
              }

              span::before {
                content: "";
                height: 8px;
                width: 8px;
                background-color: #8f8f8f;
                border-radius: 50%;
                transition:background-color 0.3s ease;
              }

              span:hover::before{
                background-color:#ffd31d;
              }

              span[data-testimonial="${active}"]::before{
                background-color:#ffd31d;
              }
            `}
          >
            {Object.keys(testimonials).map((index) => (
              <span
                onClick={(event) => handleSetClick(event)}
                data-testimonial={index}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;