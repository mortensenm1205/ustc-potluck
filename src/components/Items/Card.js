import React from 'react';
import { Card, CardName, CardItem } from './css/card';

const ItemCard = ({ person }) => {
    return(
        <Card>
            <CardName>Name: {person.name}</CardName>
            <CardItem>Item: {person.item}</CardItem>
        </Card>
    );
}

export default ItemCard;