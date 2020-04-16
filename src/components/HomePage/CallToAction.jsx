import React from "react";
import { MdContactMail } from "react-icons/md";
import { FiPhoneOutgoing } from "react-icons/fi";

export default function CallToAction() {
  return (
    <div>
      <section id="calltoaction">
        <h3>Manage your farm from afar starting today!</h3>
        <p>
          Still not sure? Contact us for a free consultation on Pifarm packages
          to suit your needs
        </p>
        <ul>
          <li>
            <MdContactMail size="1.5rem" /> Email : bigtwigs@gmail.com
          </li>
          <li>
            <FiPhoneOutgoing size="1.5rem" /> Tel : 1-868-123-4567
          </li>
        </ul>
      </section>
    </div>
  );
}
