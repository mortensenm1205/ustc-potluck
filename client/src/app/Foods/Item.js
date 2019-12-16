import React from 'react';
import { FoodDetailsContainer, FoodDetails, RemoveFoodBtn } from "./css/food";

const FoodItem = ({ food, editable, remove, index }) => {
    return (
      <FoodDetailsContainer>
        {editable && 
            <RemoveFoodBtn 
             onClick={() => remove(index)}>
                 X
            </RemoveFoodBtn>}
        <FoodDetails>{food.item}</FoodDetails>
      </FoodDetailsContainer>
    );
}

export default FoodItem;