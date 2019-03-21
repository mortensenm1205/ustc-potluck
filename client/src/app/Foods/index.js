import React from 'react';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';

const FoodContainer = ({ foods, activeUser }) => {
    return(
        <List>
            <Title>What's left to bring: </Title>
            {foods.map(food => {
                return activeUser.success ? 
                <textarea defaultValue={food.item} key={food._id} />
            :  
                <Section key={food._id}>
                    <FoodItem food={food} />
                </Section>
            })}
        </List>
    )
}

export default FoodContainer;