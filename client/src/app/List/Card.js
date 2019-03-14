import React from 'react';
import { Card, CardName, CardItem, CloseCard } from './css/card';

const ListCard = ({ person, remove, index }) => {
    return(
        <Card>
            <CloseCard onClick={e => remove(e, person, index)}>x</CloseCard>
            <CardName>Name: {person.name}</CardName>
            <CardItem>Item: {person.item}</CardItem>
        </Card>
    );
}

export default ListCard;