import React from 'react';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
    render() {
        return <React.Fragment>
            <header className="header">
                <h1>Players List</h1>
                <h3>with informatons</h3>
            </header>
        </React.Fragment>
    }
}