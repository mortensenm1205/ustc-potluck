import React from 'react';
import { Items, Title } from './css/items';
import ListCard from './Card';

const ListContainer = ({ people, remove, activeUser }) => {
    return(
        <Items>
            <Title>What people are bringing: </Title>
            {people.map((personObj, index) => (
                <ListCard 
                    person={personObj} 
                    key={personObj._id} 
                    remove={remove} 
                    index={index} 
                    activeUser={activeUser} 
                />
            ))}
        </Items>
    )
};

export default ListContainer;