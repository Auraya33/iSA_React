import React from 'react';

class AddReact extends React.Component {

    state = {
        currentInputValue: '',
        todos: []
    };

    onInputChange = (inputText) => {
        this.setState({
            currentInputValue: inputText.target.value

        });
        console.log(this.state.currentInputValue);
    };

    onButtonClicked = () => {
        this.props.onInputChange(this.state.currentInputValue);
    };

    render() {

        return (<React.Fragment>
                <input type="text" onChange={this.onInputChange}/>
                <button onClick={this.onButtonClicked}>Add</button>
            </React.Fragment>
        )
    }
}

export default AddReact;