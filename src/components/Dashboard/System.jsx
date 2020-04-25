import React from 'react';
import Ph from "./Ph";
import Turbidity from "./TurbiditySensor";
import SoilMoisture from "./SoilMoisture";
import SystemSetup from "./SystemSetup";

import {Row, Col, Container} from "react-bootstrap";

export default function System() {
    return (
        <section style={{paddingTop:'3.5%'}}>
            <Container >
                <Row>
                    <Col md={9}>
                        <h2 className="section-heading">System Stats</h2>
                        <p>Stats available from your system in real time</p>
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
