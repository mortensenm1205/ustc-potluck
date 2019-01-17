import React from 'react';

const ItemCard = ({ person }) => {
    return(
        <div>
            <p>Name: {person.name}</p>
            <p>Item: {person.item}</p>
        </div>
    );
}

export default ItemCard;