import React from 'react';
import { Items, Title } from './css/items';
import ListCard from './Card';

const ListContainer = ({ people, remove }) => {
    return(
        <Items>
            <Title>What people are bringing: </Title>
            {people.map(personObj => <ListCard person={personObj} key={personObj.id} remove={remove} />)}
        </Items>
    )
};

export default ListContainer;