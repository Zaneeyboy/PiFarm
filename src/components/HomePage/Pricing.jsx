import React from "react";
import PricingCard from "./PricingCard";
import {Container,Row,Col} from "react-bootstrap";
import PricingInfo from "./PricingInfo";

const Pricing = () => {
  return (
    <section id="pricing" >
    <Container className="fluid-container">
    <h2 className="section-heading">PiFarm Packages</h2>
      <p>Simple and affordable plans to fit your system</p>
      <Row>
        {PricingInfo.map(item=>{
          return(
            <Col lg={4}>
              <PricingCard className="pricing-column"
              key={item.key}
              title={item.title}
              price={item.price}
              features={item.features}
            />
            </Col>
            
          )
        })}
      </Row>
        
  
    </Container>
      
        
      
    </section>
  );
};

export default Pricing;
