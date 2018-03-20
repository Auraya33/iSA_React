import React, { Component } from 'react';
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";

class ContactView extends Component {

    render() {
        return (
            <React.Fragment>
                <h1>Contact List Form</h1>
                <AddContactForm/>
                <ContactList/>
            </React.Fragment>
        )
    }
}


export default ContactView;