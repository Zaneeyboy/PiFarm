import React from "react";
import PiFarmLogo from "../../images/Pifarm.png";

const About = () => {

    
    return (
      <section id="about" className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className="project-title">
              PiFarm - Revolutionizing Agriculture
            </h1>
            <p className="lead">
              Automate your hydroponic farm with PiFarm, the first web
              application built to connect with your hydroponic system in real
              time
            </p>
            <p className="lead">
              PiFarm is a web application built on React Js, Firebase and
              Bootstrap. It couples Arduino Uno and Raspberry Pi sensor
              components to deliver real time information on the status of
              hydroponic farms to its users.
            </p>
            <p className="lead">
              Don't be left behind with tradition, join the revolution today!
            </p>
            <p className="lead">Powered By</p>
            <p className="lead"> ReactJs, Firebase, Arduino and Raspberry Pi</p>
          </div>
          <div className="col-md-6">
            <img className="logo" src={PiFarmLogo} alt="Pifarm Logo" />
          </div>
        </div>
      </section>
    );
};

export default About;
