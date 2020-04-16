import React from "react";

const About = () => {
    return ( 
        <section id = "about" >
            <h2>About PiFarm</h2>
            <p>
            PiFarm is a web application built off of Reactjs and Firebase which allows it 's users to monitor and manage their hydroponic farm from their
            phone.It is coupled to Raspberry Pi and Arduino Uno components which in
            turn are coupled to various sensors which detect and send data to the PiFarm application in real time.PiFarm brings efficiency and management of your smart farm to a whole new level through it 's ability to connect
            with your system even when on the go without the need
            for costly equipment or hiring people to look after your farm
            for you.With PiFarm, you maintain control of your system by monitoring the factors affecting your system as needed. 
            </p>
        </section>
    );
};

export default About;
