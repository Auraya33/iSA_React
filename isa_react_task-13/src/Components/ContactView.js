import React, { Component } from 'react';
import ContactList from "./ContactList";
import AddContactForm from "./AddContactForm";

class ContactView extends Component {
    state = {
        contacts: [
            {
                id: '1',
                fullName: 'Kasia Nagel',
                phoneNumber: `999222111, `,
                email: 'email@gmail.com',
                category: `[family]`
            }]
    };

    removeContact = contactId => {
        this.setState({
            contacts: this.state.contacts.filter(contact =>
             contact.id !== contactId
            )
        })
    };


    addContact = ({ contactFullName, contactPhoneNumber, contactEmail, contactCategory}) => {
        this.setState({
            contacts: this.state.contacts.concat({
                id: Date.now().toString(32),
                fullName: contactFullName,
                phoneNumber:contactPhoneNumber + ', ',
                email: contactEmail,
                category: contactCategory

            })
        })
    };

    render() {
        return (
            <React.Fragment>
                <h1>Contact List Form</h1>
                <AddContactForm
                    addContact={this.addContact}
                />
                <ContactList
                contacts={this.state.contacts}
                removeContact={this.removeContact}
                />
            </React.Fragment>
        )
    }
}


export default ContactView;