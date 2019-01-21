import React from 'react';
import { List, Title, Section } from './css/list';
import FoodItem from './Item';

const FoodContainer = ({ foods, entry }) => {
    return(
        <List>
            <Title>What's left to bring: </Title>
            <Section>
                {foods.map(food => {
                    return <FoodItem key={food.id} food={food} />
                })}
            </Section>
        </List>
    )
}

export default FoodContainer;