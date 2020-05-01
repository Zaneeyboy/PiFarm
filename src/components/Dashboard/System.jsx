import React,{useState,useEffect,useContext} from 'react';
import Ph from "./Ph";
import Turbidity from "./TurbiditySensor";
import SoilMoisture from "./SoilMoisture";
import SystemSetup from "./SystemSetup";
import {AuthContext} from "../../config/Auth";
import firebase from "../../config/firebase";

import {Row, Col, Container} from "react-bootstrap";

export default function System() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [system,setSystem]=useState({
        name:"",
        type:""
    });

    const {currentUser} = useContext(AuthContext);
    const uid=currentUser.uid;

    useEffect(()=>{
        firebase.firestore().collection("users").doc(uid).get().then(doc=>{
            setName(doc.data().name);
            setEmail(doc.data().email);
        });
    },[]);

    const systemsArray=[];
    useEffect(() => {
        firebase.firestore().collection("users").doc(uid).collection("systems").onSnapshot(snapshot=>{
            let changes = snapshot.docChanges();
            changes.forEach(change=>{
                if(change.type=="added"){
                    systemsArray.push(change.doc.data());
                }
                //if(change.type=="removed"){
                    //remove data from the array
                //}
            });
        });
    }, []);

    return (
        <section style={{paddingTop:'3.5%'}}>
            <Container >
                <Row>
                    <Col md={9}>
                        <h2 className="section-heading">Welcome back {name}</h2>
                        <p>Email: {email}</p>
                        <p>See the latest readings from your system below</p>
                    </Col>
                    <Col md={3}>
                        <SystemSetup/>
                    </Col>
                </Row>
                </Container>
                <Ph/>
                <Turbidity/>
                <SoilMoisture/>
        </section>
    )
}
