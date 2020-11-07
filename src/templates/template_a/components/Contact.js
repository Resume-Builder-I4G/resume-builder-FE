import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ContactItem, StyledH2 } from "./StyledComponents";

function Contact({ contact }) {
  return (
    <div>
      <StyledH2>Contact</StyledH2>
      <ul>
        <ContactItem>
          <FontAwesomeIcon icon={faMapMarker} /> {contact.address}
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faPhone} /> {contact.phone}
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope} /> {contact.email}
        </ContactItem>
      </ul>
    </div>
  );
}

export default Contact;
