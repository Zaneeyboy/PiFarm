import React,{useState} from 'react';
import {Container,Row,Col,Modal} from "react-bootstrap";
import SoilMoistureLogo from "../../images/Soil Moisture.png";

export default function SoilMoisture() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="colored-section" style={{paddingTop:"3.5%", paddingBottom:"3.5%"}}>
            <Container>
                <h1 className="section-heading">Soil Moisture Level</h1>
                <Row>
                    <Col md={4} sm={3}>
                        <img style={{borderRadius:"50%",width:"100%",paddingTop:"2%"}} src={SoilMoistureLogo} alt="Soil Moisture Logo"></img>
                    </Col>
                    <Col md={8} sm={9}>
                        <p>
                        The soil mositure level here refers to the moisture level of the growing medium in which your
                        plants thrive in your hydroponic system. This measurement seeks to assist with deploying nutrients at
                        the right time to your plants so that they remain neither underfed nor overfed. As a result, this 
                        measurements will give a good indication of when you should feed your plants during the course of the day.
                        </p>
                        <button className="btn btn-dark">Check Soil Moisture Level</button>

                        <h3 className="" style={{paddingTop:"4%"}}>Current Soil Moisture Reading: 85% saturated</h3>
                        <button className="btn btn-outline-dark" onClick={handleShow}
                                type="button">Soil Moisture Value Breakdown</button>
                        {/* <Pump moisturelevel={soilMoisture}/> */}
                    </Col>
                </Row>
            </Container>   

            <Modal contentLabel="Soil Moisture Reading Breakdown Modal" show={show} size="lg" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Soil Moisture Reading Breakdown</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            Conditionally render information based on the soil moisture value here for the user to read
                        </Container>
                        
                    </Modal.Body> 
                    
                </Modal>    
        </div>
    )
}
