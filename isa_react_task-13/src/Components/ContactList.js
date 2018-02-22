import React, {Component} from 'react'

class ContactList extends Component {

handleRemoveClick = event => {
    const contactId = event.target.dataset.contactId;
    this.props.removeContact(contactId)
};

    render() {
        const {contacts} = this.props;
        return (
            <ul>
                {contacts.map(contact => {
                    return (
                        <li key={contact.id}>
                            <strong>{contact.fullName}</strong><br/>
                            {contact.phoneNumber}
                            {contact.email}<br/>
                            {contact.category}<br/>
                            <button data-contact-id={contact.id}
                                    onClick={this.handleRemoveClick}>
                                Remove
                            </button>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ContactList