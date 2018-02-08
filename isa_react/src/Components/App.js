import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Player from './Player';

import '../style/style.css';


export default class extends React.Component {

    render() {
        return <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </React.Fragment>

    }
}