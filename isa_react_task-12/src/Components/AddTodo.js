import React from 'react';

class AddReact extends React.Component {
    state = {
        currentInputValue: ''
    };

    onInputChange = (inputText) => {
        this.setState({
            currentInputValue: inputText.target.value

        });
        console.log(this.state.currentInputValue);
    };

    render() {
        const { onAdded } = this.props;

        return ( <React.Fragment>
        <input type="text" onChange={this.onInputChange}/>
        <button onClick={ onAdded }>Add</button>
            </React.Fragment>
        )
    }
}

export default AddReact;