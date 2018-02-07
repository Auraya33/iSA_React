import React from 'react';

import items from '../Data/players';

export default (props) => {
    const playersToDisplay = props.match.params.id;
    const player = items[playersToDisplay];

    return player?
        <React.Fragment>
            <h2>{player.nickname}</h2>
            <p>{player.level}</p>
            <p>{player.about}</p>
        </React.Fragment>
        :
        <p>Error</p>

}