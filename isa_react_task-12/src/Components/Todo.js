import React from 'react'
import PropTypes from 'prop-types';



class Todo extends React.Component {
    render() {
        const { name, isFinished } = this.props;
        let className = 'todo';

        if (isFinished === true) {
            className += ' todo-done' }

        return <li className={ className }>{name} {isFinished}</li>
    }
}

Todo.protoTypes = {
    name: PropTypes.string.isRequired
};

export default Todo;