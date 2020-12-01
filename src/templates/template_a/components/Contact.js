import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { ContactDiv, ContactItem, StyledH2 } from "./StyledComponents";

function Contact({ contact }) {
  return (
    <ContactDiv>
      <StyledH2>Contact</StyledH2>
      <ul>
        <ContactItem>
          <FontAwesomeIcon icon={faMapMarker} /> {contact.address || ""}
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faPhone} /> {contact.phone || ""}
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope} /> {contact.email || ""}
        </ContactItem>
      </ul>
    </ContactDiv>
  );
}

export default Contact;
