import React,{useState} from 'react'
import {Modal} from "react-bootstrap";

export default function SystemSetup() {


    const [system,setSystem]=useState({
        id:""
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
            <form  onSubmit={handleSubmit}>
              <input
              name="id"
                type="text"
                placeholder="System ID"
                value={system.id}
                onChange={handleChange}
              />
              <button type="submit">Complete Setup</button>
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
