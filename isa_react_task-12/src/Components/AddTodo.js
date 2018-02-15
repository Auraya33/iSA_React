import React from 'react';

class AddReact extends React.Component {

    state = {
        currentInputValue: ''
    };

    onInputChange = (inputText) => {
        this.setState({
            currentInputValue: inputText.target.value
        })
    };

    render() {
        return ( <React.Fragment>
        <input type="text" onChange={this.onInputChange}/>
        <button>Add</button>
            </React.Fragment>

        )
    }
}

export default AddReact;