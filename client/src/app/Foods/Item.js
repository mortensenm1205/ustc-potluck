import React from 'react';
import { Food, FoodDetails, RemoveFoodBtn } from "./css/food";

const FoodItem = ({ food, editable, remove, index }) => {
    return (
      <Food>
        {editable && 
            <RemoveFoodBtn 
             onClick={() => remove(index)}>
                 X
            </RemoveFoodBtn>}
        <FoodDetails>{food.item}</FoodDetails>
      </Food>
    );
}

export default FoodItem;