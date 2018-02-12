import React from 'react';
import {Link} from 'react-router-dom';
import players from '../Data/players';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';


export default () => {
    return (
            <React.Fragment>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Nickname</TableHeaderColumn>
                            <TableHeaderColumn>Level</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {players.map(player =>
                            <TableRow>
                                <TableRowColumn>
                                     <Link to={`/player/${player.id -1}`}>{player.nickname}</Link></TableRowColumn>
                                <TableRowColumn>{player.level}</TableRowColumn>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </React.Fragment>
    )
};



