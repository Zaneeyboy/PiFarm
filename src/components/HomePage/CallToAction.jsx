import React from "react";
import { MdContactMail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";


export default function CallToAction() {
  return (
    <div>
      <section id="calltoaction" className="container-fluid colored-section">
        <h3 className="section-heading">
          Contact us for a free consultation on Pifarm packages today!
        </h3>
        <ul>
          <li className="btn btn-outline-dark contact-button">
            <MdContactMail size="1.5rem" /> Email : bigtwigs@gmail.com
          </li>
          <li className="btn btn-primary contact-button">
            <FiPhoneOutgoing size="1.5rem" /> Tel : 1-868-123-4567
          </li>
        </ul>
      </section>
    </div>
  );
}
