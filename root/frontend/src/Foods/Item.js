import React from 'react';
import { Food } from './css/food';

const FoodItem = ({ food }) => {
    return <Food>{food.item}</Food>
}

export default FoodItem;