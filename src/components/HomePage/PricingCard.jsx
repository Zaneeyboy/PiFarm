import React, {useState} from "react";
import ReactModal from "react-modal";
import {IoMdClose} from "react-icons/io";
import firebase from "../../config/firebase";
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

    ReactModal.setAppElement("*");

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
            <React.Fragment >
                <div>
                    <div>
                        <div>
                            <h3>{props.title}</h3>
                        </div> 
                        <div>
                            <h2>{props.price}</h2>
                            {props.features.map(feature => {
                                return <p key = {feature}>{feature}</p>
                            })}
                            <button onClick = { handleShow }
                                type = "button" > Sign Up</button>
                        </div> 
                    </div>
                </div>
                <ReactModal shouldCloseOnOverlayClick = { true} isOpen = {show} contentLabel = "Signup Form" >
                    <div>
                        <h2 className = "modal-title" > Signup form for {props.title} Package </h2>
                        <button onClick = {handleClose}><IoMdClose/></button>
                    </div>
                    <div>
                        <h1>Hello {contact.fName} {contact.lName} </h1> 
                        <p>{contact.email}</p>
                        <form onSubmit = {handleSubmit} >
                            <input onChange = {handleChange}        
                                name = "fName"
                                value = {contact.fName}
                                placeholder = "First Name" />
                            <input onChange = {handleChange}
                                name = "lName"
                                value = {contact.lName}
                                placeholder = "Last Name" />
                            <input onChange = {handleChange}
                                name = "email"
                                value = {contact.email}
                                placeholder = "Email" />
                            <button onClick = {handleSubmit}>Submit Form</button> 
                        </form> 
                    </div> 
                    <div >
                        <button onClick = {handleClose}>Close</button> 
                    </div> 
                </ReactModal> 
            </React.Fragment> 
        </div>
    );
}
export default PricingCard;
