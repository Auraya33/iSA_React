import React from 'react';

class AddReact extends React.Component {

    state = { inputText };

    render() {
        const { onAdded } = this.props;

        return <input type="text" onChange={(inputText) => {` ${inputText.target.value}`}}/>

    }
}

export default AddReact;