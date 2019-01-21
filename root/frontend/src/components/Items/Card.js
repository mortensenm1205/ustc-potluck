import React from 'react';
import { Card, CardName, CardItem, CloseCard } from './css/card';

const ItemCard = ({ person, remove }) => {
    return(
        <Card>
            <CloseCard onClick={() => remove(person)}>x</CloseCard>
            <CardName>Name: {person.name}</CardName>
            <CardItem>Item: {person.item}</CardItem>
        </Card>
    );
}

export default ItemCard;