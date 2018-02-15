import React from 'react'
import PropTypes from 'prop-types';

class Todo extends React.Component {

    render() {
        const { name, isFinished } = this.props;

        return  <li>{name} {isFinished}</li>
    }
}

Todo.protoTypes = {
    name: PropTypes.string,
};

export default Todo;