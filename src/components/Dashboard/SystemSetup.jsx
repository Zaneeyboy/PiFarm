import React,{useState} from 'react'
import {Modal} from "react-bootstrap";
import {css} from "emotion";

export default function SystemSetup() {


    const [system,setSystem]=useState({
        name:"",
        type:""
    });

    function handleSubmit(event){
      event.preventDefault();
      console.log("Form submitted; system set up");
  }

  function handleChange(event){
      const {name,value} = event.target;
      setSystem(prevValue => {
        return {
          ...prevValue,
          [name]: value
        };
      });
      handleClose();
  }

    const [show,setShow]=useState(false);

    function handleShow(){
        setShow(true);
    }

    function handleClose(){
        setShow(false);
    }

    return (
        <>
        <div>
            <button onClick={handleShow} className="btn btn-outline-dark">Setup System</button>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>System Setup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div >
            <form onSubmit={ handleSubmit } className = {css `
              padding-top:3.5%;
              padding-bottom:3.5%;
            `} >
              <input className={css`
                        border: 1px solid black;
                        background-color: rgba(252, 252, 252, 0.2);
                        width: 250px;
                        border-radius: 3px;
                        padding: 10px 15px;
                        margin: 0 auto 10px auto;
                        display: block;
                        text-align: center;
                        font-size: 18px;
                        color: black;
                        font-weight: 300;
                    `}
                name="name"
                type="text"
                placeholder="System Name"
                value={system.name}
                onChange={handleChange}
              />
            

              <button className={css`
                appearance: none;
                outline: 0;
                background-color: #343A40;
                border: 0;
                padding: 10px 15px;
                color: white;
                border-radius: 3px;
                width: 250px;
                font-size: 18px;
              `} type="submit">Complete Setup</button>
            </form>
        </div>
            
        </Modal.Body>
        {/* <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" onClick={handleClose}>
            Save Changes
          </button>
        </Modal.Footer> */}
      </Modal>
        </>

    )
}
