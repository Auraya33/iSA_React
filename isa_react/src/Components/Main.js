import React from 'react';
import { Link } from 'react-router-dom';
import players from '../Data/players';

export default () => {
    const playersIds = Object.keys(players);
    return <React.Fragment>
        <table>
            <tbody>
            <tr>
                <th>Nickname</th>
                <th>Level</th>
            </tr>
            <tr>
                {playersIds
                    .map(id => <td> key={id}<Link to={`Player/${id}`}>{players[id].nickname}</Link></td>)
                }
            </tr>
            </tbody>
        </table>
    </React.Fragment>
}
