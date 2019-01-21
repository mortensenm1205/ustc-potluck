import React from 'react';
import { Items, Title } from '../../css/items';
import ItemCard from './Card';

const ItemsContainer = ({ people, remove }) => {
    return(
        <Items>
            <Title>What people are bringing: </Title>
            {people.map(personObj => <ItemCard person={personObj} key={personObj.id} remove={remove} />)}
        </Items>
    )
};

export default ItemsContainer;