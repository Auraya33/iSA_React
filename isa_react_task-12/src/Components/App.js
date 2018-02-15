import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

import Todo from './Todo';

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

    render() {
        return <MuiThemeProvider>
            <React.Fragment>
                {this.state.todos.map(todo =>
                    <Todo name={todo.name} isFinished={todo.isFinished}/>

                )}

            </React.Fragment>
        </MuiThemeProvider>
    }
}
