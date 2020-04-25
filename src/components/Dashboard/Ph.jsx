import React,{useState} from 'react';
//import phLogo from "../../images/ph.png";
import phScaleLogo from "../../images/phScale.png";
import {Container,Row,Col,Modal} from "react-bootstrap";

export default function Ph() {
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <div div className = "colored-section"
        style = {
            {
                paddingTop: '3.5%',
                paddingBottom:"3.5%"
            }
        } >
        <Container>
        <h1 className="section-heading ">pH Level</h1>
            <Row>
            <Col md={4} sm={3}>
                <img src={phScaleLogo} style={{width:'100%',borderRadius: '50%',paddingTop:"2%" }} alt="logo" />
            </Col>
            <Col md={8} sm={9}>
                <p>
                    The pH level is measured on a scale from 1 to 14, with the neutral point being 7. Everything above neutral is alkaline and everything below is acidic. In hydroponics,
                    when growing several different types of herbs or vegetables in one container,you will probably do best in the range of 5.6 to 6.5, because it is within this range that nutrients
                    are most available to plants. For instance, at 7.0, which is outside the most suitable range for vegetables, plants are still capable of taking up such elements as nitrogen, phosphorous and potassium.
                    At this level though, the trace elements are becoming lost to the plants; the amounts of iron, maganese, boron, copper, zinc and molybdenum are generally cut in half.
                    So if your pH is above 7, be on the lookout for trace element problems rather than those caused by macronutrients nitrogen, phosphorous and potassium.
                </p>
                <button className="btn btn-dark">Check Ph level</button>

                <h3 className="" style={{paddingTop:"4%"}}>Current PH Reading: 7.0</h3>
                <button className="btn btn-outline-dark" onClick={handleShow}
                                type="button">pH Value Breakdown</button>
            </Col> 
        </Row>
        </Container>
            
            <Modal contentLabel="pH Reading Breakdown Modal" show={show} size="lg" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>pH Reading Breakdown</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            Conditionally render information based on the Ph value here for the user to read
                        </Container>
                        
                    </Modal.Body> 
                    
                </Modal> 
        </div>
        
    )
}
