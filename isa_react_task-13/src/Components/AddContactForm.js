import React, { Component } from 'react'
import { connect } from 'react-redux'

const initialState = {
    contactFullName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    contactCategory: '',
};

class AddContactForm extends Component {
    state = initialState;

    handleSubmit = event => {
        event.preventDefault();
        this.props.addContact(this.state);
        this.setState(initialState)
    };

    handleChange = ({ target: {name, value} }) => {
        this.setState({
            [name]: value
        })
    };

    renderInput(fieldName) {
        return (
            <input
                name={fieldName}
                value={this.state[fieldName]}
                placeholder={fieldName}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                  {this.renderInput('contactFullName')}
                  {this.renderInput('contactPhoneNumber')}
                  {this.renderInput('contactEmail')}
                  {this.renderInput('contactCategory')}

                <button>Add</button>
            </form>
        )
    }
}


export default connect(state => ({

}))
