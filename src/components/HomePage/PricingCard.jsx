import React, {useState} from "react";
//import {IoMdClose} from "react-icons/io";
import firebase from "../../config/firebase";
import {Card,Modal,Container,Row,Col} from "react-bootstrap";
//using esversion:6

const PricingCard = props => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
        package: ""
    });


    function handleChange(event) {
        const {name,value} = event.target;
        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    function resetState() {
        setContact(() => {
            return {
                fName: "",
                lName: "",
                email: "",
                package: ""
            }
        });
    }

    function signUp(first, last, eml, pkg) {
        firebase.firestore().collection('signups').add({
            firstName: first,
            lastName: last,
            email: eml,
            package: pkg
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        contact.package = props.title;
        signUp(contact.fName, contact.lName, contact.email, contact.package);
        resetState();
        handleClose();
    }

    return ( 
        <div>
            <React.Fragment>
                <Card border="dark" md={4}>
                    <Card.Body>
                        <Card.Header><h3 className="">{props.title}</h3></Card.Header>
                        <Card.Title><h2 className="price-text">{props.price}</h2></Card.Title>
                        <Card.Text className="card-text">
                            {props.features.map(feature => {
                                return <p key={feature}>{feature}</p>
                            })}
                        </Card.Text>
                        <button className="btn btn-primary" onClick={handleShow}
                                type="button">Sign Up</button>
                    </Card.Body>
                </Card>

                <Modal contentLabel="Signup Form" show={show} size="lg" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title> Signup form for the {props.title} Package </Modal.Title>
                        {/* <button onClick = {handleClose}><IoMdClose/></button> */}
                    </Modal.Header>
                    <Modal.Body>
                        <Container fluid>
                            <h1>Hello {contact.fName} {contact.lName} </h1> 
                            <p>{contact.email}</p>
                            <form onSubmit = {handleSubmit} >
                                <Row>
                                    <Col sm={12}>
                                    <input className="modalInput" onChange = {handleChange}        
                                    name = "fName"
                                    value = {contact.fName}
                                    placeholder = "First Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  sm={12}>
                                    <input className="modalInput" onChange = {handleChange}
                                    name = "lName"
                                    value = {contact.lName}
                                    placeholder = "Last Name" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  sm={12}>
                                    <input className="modalInput" onChange = {handleChange}
                                    name = "email"
                                    value = {contact.email}
                                    placeholder = "Email" />
                                    </Col>
                                </Row>
                                        <p className="modal-submit-text">Submit this form and we'll be in contact soon with your package</p>
                                        <button className="btn btn-primary modal-button" onClick = {handleSubmit}>Submit Form</button> 

                                
                            </form> 

                        </Container>
                        
                    </Modal.Body> 
                    
                </Modal> 
            </React.Fragment> 
        </div>
    );
}
export default PricingCard;

  