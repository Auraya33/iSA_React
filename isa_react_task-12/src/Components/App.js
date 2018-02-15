import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default class extends React.Component {

    state = {
        1: {name: 'Do laundry', isFinished: false},
        2: {name: 'Cook meal', isFinished: true},
        4: {name: 'Clean dishes', isFinished: true},
        3: {name: 'Set bed', isFinished: false},
        5: {name: 'Vaccum floors', isFinished: false},
        6: {name: 'Take dog for walk ', isFinished: true},
        7: {name: 'Clean mirror', isFinished: false},
        8: {name: 'Empty trash', isFinished: true}
    };

    render() {
        return <MuiThemeProvider>
            <React.Fragment>
                <Todo name={this.state.name}/>

            </React.Fragment>
        </MuiThemeProvider>
        }
            }
