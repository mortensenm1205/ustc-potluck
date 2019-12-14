import React from 'react';
import { Items, Title } from './css/items';
import ListCard from './Card';

const ListContainer = ({ people, remove }) => {
    /*
        When you remove all items from the people array
        the array turns to undefined which crashes the whole 
        program. This condition just updates the undefined 
        back to an empty array.
    */
    people = people === undefined ? [] : people;

    return(
        <Items>
            <Title>What people are bringing: </Title>
            {people.map((personObj, index) => (
                <ListCard 
                    person={personObj} 
                    key={personObj._id} 
                    remove={remove} 
                    index={index} 
                />
            ))}
        </Items>
    )
};

export default ListContainer;