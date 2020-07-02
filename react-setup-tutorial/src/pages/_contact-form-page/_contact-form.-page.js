import React from "react";
import Contact from "../../components/organisms/_contact-form/_contact-form";
import ContactList from "../../components/organisms/_contact-list/_contact-list";
import { Typography, Input } from "@material-ui/core";
const ContactForm = ({ props }) => {
  return (
    <>
      <Contact props={props} />
      <ContactList props={props} />
    </>
  );
};

export default ContactForm;
