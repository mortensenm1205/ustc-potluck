import React from 'react';
import { Food } from './css/food';

const FoodItem = ({ food }) => {
    return <Food>{food.name}</Food>
}

export default FoodItem;