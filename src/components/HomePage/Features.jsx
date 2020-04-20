import React from "react";
import { FaWifi } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GoAlert } from "react-icons/go";


const Features = () => {
  return (
    <div id="features" className="container-fluid colored-section">
      <div className="row">
        <div className="feature-box col-lg-4">
          <FaWifi className="icon" size="5rem" />
          <h3 className="feature-title">Monitor your farm</h3>
          <p>
            See the status of your hydroponic farm in real time on your phone
          </p>
        </div>

        <div  className="feature-box col-lg-4">
          <GiPlantsAndAnimals className="icon" size="5rem" />
          <h3 className="feature-title">Feed your farm when it's hungry</h3>
          <p>
            Deploy nutrients during the day when your system struggles to cope
            with weather conditions
          </p>
        </div>

        <div className="feature-box col-lg-4">
          <GoAlert className="icon" size="5rem" />
          <h3 className="feature-title">Be alerted of anomalies</h3>
          <p>See alerts in real time from anomalies detected in your system</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
