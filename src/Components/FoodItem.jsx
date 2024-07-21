import React from 'react';

const FoodItem = ({ foodId, setFoodId, food }) => {
  return (
    <div className="card" style={{ maxWidth: '25rem' }}>
      <img src={food.image} className="card-image card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{food.title}</h5>
        <p className="card-text"></p>
        <a
          onClick={() => {
            setFoodId(food.id);
          }}
          href="#"
          className="btn btn-primary"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

export default FoodItem;
