import React from 'react';
import items from '../Data/players';
import { Link } from 'react-router-dom';

import {Card, CardHeader, CardText} from 'material-ui/Card';

export default (props) => {
    const playersToDisplay = props.match.params.id;
    const player = items[playersToDisplay];


    return player ?

                <Card>
                    <CardHeader><b>Id:</b> {player.id}</CardHeader>
                    <CardHeader><b>Nickname:</b> {player.nickname}</CardHeader>
                    <CardText><b>Level:</b> {player.level}</CardText>
                    <CardText><b>About:</b> {player.about}</CardText>
                    <Link to='/'><button>Player List</button></Link>
                </Card>
                :
                <p>Error</p>

}
