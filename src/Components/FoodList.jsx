import React from 'react';
import FoodItem from './FoodItem';

const FoodList = ({ foodId, setFoodId, apiData }) => {
  return (
    <div>
      {apiData.map((food) => (
        <FoodItem
          foodId={foodId}
          setFoodId={setFoodId}
          key={food.id}
          food={food}
        />
      ))}
    </div>
  );
};

export default FoodList;
