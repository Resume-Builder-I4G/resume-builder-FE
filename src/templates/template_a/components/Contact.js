import React from "react";
import { StyledH2 } from "./StyledComponents";

function Contact({ contact }) {
  return (
    <div>
      <StyledH2>Contact</StyledH2>
      <ul>
        <li>
          {/* <img src={location_marker} alt="" /> */}
          {contact.address}
        </li>
        <li>
          {/* <img src={phone_icon} alt="" /> */}
          {contact.phone}
        </li>
        <li>
          {/* <img src={mail_icon} alt="" /> */}
          {contact.email}
        </li>
      </ul>
    </div>
  );
}

export default Contact;
