import React, {Component} from 'react'
import { connect } from 'react-redux'

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
                            <strong>{contact.name}</strong><br/>
                            {contact.number}
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

export default connect(
    state => ({
        contacts: state.contacts.data
    }),
    dispatch => ({
        removeContact: removedContactId =>
            dispatch({
                type: 'REMOVE_CONTACT',
                removedContactId
            })
    })
)(ContactList)