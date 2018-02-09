import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Footer from './Footer';
import Home from './Home';
import Player from './Player';
import TopBar from './TopBar';

import '../style/style.css';

export default class extends React.Component {

    render() {

        return <BrowserRouter>
            <MuiThemeProvider>
                <React.Fragment>
                    <TopBar/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/player/:id" component={Player}/>
                    <Footer/>

                </React.Fragment>
            </MuiThemeProvider>
        </BrowserRouter>
    }
}


