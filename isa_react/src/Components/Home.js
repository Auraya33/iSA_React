import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import players from '../Data/players';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default () => {
    const playerIds = Object.keys(players);
    return <BrowserRouter>
        <MuiThemeProvider>
            <React.Fragment>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Nickname</TableHeaderColumn>
                            <TableHeaderColumn>Level</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {playerIds.map(id =>
                            <TableRow key={id}>
                                <TableRowColumn>
                                     <Link to={`/player/${id}`}>{players[id].nickname}</Link></TableRowColumn>
                                <TableRowColumn>{players[id].level}</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </React.Fragment>
        </MuiThemeProvider>
    </BrowserRouter>

};



