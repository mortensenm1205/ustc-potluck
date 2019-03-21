import React from 'react';

import { List, Title, Section } from './css/list';
import FoodItem from './Item';

const FoodContainer = ({ foods, activeUser }) => {
    return(
        <List>
            <Title>What's left to bring: </Title>
            <Section >
                {foods.map(food => {
                    return activeUser.success ? 
                    <textarea defaultValue={food.item} key={food._id} />
                :  
                    <FoodItem food={food} key={food._id}/>
                })}
            </Section>
        </List>
    )
}

export default FoodContainer;