import React from 'react';
import { Link } from 'react-router-dom';
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



export default class Main extends React.Component {
    render() {
        return <React.Fragment>
            <MuiThemeProvider>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHeaderColumn>Nickname</TableHeaderColumn>
                        <TableHeaderColumn>Level</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    return (
                    {players.map((player, id) => (
                        <TableRowColumn key={id}> {player.nickname}</TableRowColumn>
                        ))
                    };
                    </TableRow>
                </TableBody>
            </Table>
            </MuiThemeProvider>
        </React.Fragment>
    }
}