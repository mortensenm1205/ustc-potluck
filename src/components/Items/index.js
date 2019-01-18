import React from 'react';
import { Items, Title } from './css/items';
import ItemCard from './Card';

const ItemsContainer = ({ people }) => {
    return(
        <Items>
            <Title>What people are bringing: </Title>
            {people.map(person => {
                return <ItemCard person={person} key={person.id} />
            })}
        </Items>
    )
};

export default ItemsContainer;