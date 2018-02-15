import React from 'react'
import PropTypes from 'prop-types';

class Todo extends React.Component {

    render() {
        const { name } = this.props;

        return (
            <ol>
                <li>{name}</li>
            </ol>
        )
    }
}

Todo.protoTypes = {
    name: PropTypes.string,
};

export default Todo;