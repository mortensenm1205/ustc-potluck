import React from 'react';
import { List, Title, Section } from '../../css/list';
import FoodItem from './Food';

const ListContainer = ({ foods, entry }) => {
    return(
        <List>
            <Title>What's left to bring: </Title>
            <Section>
                {foods.map(food => {
                    if(entry.item === food.name) {
                        foods.splice(foods.indexOf(food), 1)
                    }

                    if(food === 0) {
                        foods.pop(food);
                    }

                    return <FoodItem key={food.id} food={food} />
                })}
            </Section>
        </List>
    )
}

export default ListContainer;