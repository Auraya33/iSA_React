import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Todo from './Todo';
import AddTodo from './AddTodo';

import '../css/style.css';

export default class extends React.Component {

    state = {
        todos: [
            {name: 'Do laundry', isFinished: false},
            {name: 'Cook meal', isFinished: true},
            {name: 'Clean dishes', isFinished: true},
            {name: 'Set bed', isFinished: false},
            {name: 'Vaccum floors', isFinished: false},
            {name: 'Take dog for walk ', isFinished: true},
            {name: 'Clean mirror', isFinished: false},
            {name: 'Empty trash', isFinished: true}
        ],
    };

    updateTodoList = (inputValue) => {
      const updatedTodoList = { name: inputValue , isFinished: false };
        this.setState(() => ( {todos: [...this.state.todos, updatedTodoList]}));
    };

    render() {
        return <MuiThemeProvider>
            <React.Fragment>
                {this.state.todos.map(todo =>
                    <Todo name={todo.name} isFinished={todo.isFinished}/>
                )}
                <AddTodo onInputChange={this.updateTodoList}/>

            </React.Fragment>
        </MuiThemeProvider>
    }

}
