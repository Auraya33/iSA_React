import React from 'react'
import PropTypes from 'prop-types';


class Todo extends React.Component {
    render() {
        const { name, isFinished } = this.props;

        if (isFinished.props === true) {

            document.querySelectorAll('li').style.textDecoration = 'line-through';
        }

        return  <li>{name} {isFinished}</li>
    }
}

Todo.protoTypes = {
    name: PropTypes.string.isRequired,
};

export default Todo;