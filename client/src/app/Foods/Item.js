import React from 'react';
import { Food, FoodDetails, RemoveFoodBtn } from "./css/food";

const FoodItem = ({ food, editable }) => {
    return (
      <Food>
        {editable && <RemoveFoodBtn>X</RemoveFoodBtn>}
        <FoodDetails>{food.item}</FoodDetails>
      </Food>
    );
}

export default FoodItem;