import React,{useState} from 'react'
import {Container,Row,Col,Modal} from "react-bootstrap";
import TurbidityLogo from "../../images/Turbidity.png";


export default function TurbiditySensor() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="dark-section" style={{paddingTop:'3.5%',paddingBottom:'3.5%'}}>
        <Container>
        <h1 className="section-heading colored-text">Turbidity Level</h1> 
            <Row>
                <Col md={8} sm={9}>      
                    <p p className = "white-text" >
                    Turbidity is an optical determination of water clarity. It is determined by the amount 
                    of light particles in the water column. The more particles that are present, the more 
                    light is refracted in the water column. Ppm or parts per million 
                    is used as a measurement of strength of the nutrient solution in a hydroponic reservoir,
                        indicating how many milligrams of nutrients are present in every 1 litre of water. The 
                        amount of nutrient needed depends on the growth stage and the type of plant grown in the hydroponic system.
                        This is important since a low level of ppm will result in your plants becoming stunted 
                        in growth since not enough nutrients are present, for instance.

                    </p>
                    <button className="btn btn-warning" style={{backgroundColor:'#ffd31d'}}>Check PPM Level</button>
                    <h3 className="colored-text" style={{paddingTop:"4%"}}>Current PPM Reading: 1500 ppm</h3>
                    <button button className = "btn btn-warning"
                    style = {
                        {
                            backgroundColor: '#ffd31d'
                        }
                    }
                    onClick = {
                        handleShow
                    }
                                type="button">PPM Value Breakdown</button>
                </Col>
                <Col md={4} sm={3}>
                    <img style={{width:'100%',borderRadius: '50%',paddingTop:"2%" }} src={TurbidityLogo} alt="Turbidity Logo"/>
                </Col>
            </Row>
        </Container>
            
            <Modal contentLabel="PPM Reading Breakdown Modal" show={show} size="lg" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>PPM Reading Breakdown</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            Conditionally render information based on the PPM value here for the user to read
                        </Container>
                        
                    </Modal.Body> 
                    
                </Modal> 
        
        </div>
    )
}
