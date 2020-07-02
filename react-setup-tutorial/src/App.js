import React, { Component } from "react";
import { connect } from "react-redux";
import * as contactAction from "./redux/actions/contactAction";
import ContactFormPage from "./pages/_contact-form-page/_contact-form.-page";
import { ThemeProvider } from "@material-ui/core";
import { myTheme } from "../src/theme";
const App = (props) => {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="container">
        <ContactFormPage props={props}> </ContactFormPage>
      </div>
    </ThemeProvider>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: (contact) => dispatch(contactAction.createContact(contact)),
    deleteContact: (index) => dispatch(contactAction.deleteContact(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
