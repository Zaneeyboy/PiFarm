import React from "react";
import { FaWifi } from "react-icons/fa";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GoAlert } from "react-icons/go";

const Features = () => {
  return (
    <div id="features">
      <div>
        <div>
          <FaWifi size="5rem" />
          <h3>Monitor your farm</h3>
          <p>
            See the status of your hydroponic farm in real time on your phone
          </p>
        </div>

        <div>
          <GiPlantsAndAnimals size="5rem" />
          <h3>Feed your farm when it's hungry</h3>
          <p>
            Deploy nutrients during the day when your system struggles to cope
            with weather conditions
          </p>
        </div>

        <div>
          <GoAlert size="5rem" />
          <h3>Be alerted of anomalies</h3>
          <p>See alerts in real time from anomalies detected in your system</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
