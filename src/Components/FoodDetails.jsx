import React, { useEffect, useState } from 'react';

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState('');
  const [loading, setLoading] = useState(false);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = 'dd84a805a14b40b9b8ad08c3fff463e6';
  useEffect(() => {
    async function recipeInfo() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setLoading(true);
      console.log(data);
    }
    recipeInfo();
  }, [foodId]);
  return (
    <div>
      <div className="card mb-3">
        <img src={food.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{food.title}</h5>

          <p className="card-text foodDetails">
            <small className="text-body-secondary">
              ⏰{food.readyInMinutes} Minutes
            </small>
            <small className="text-body-secondary">
              {food.vegetarian ? '🥕 Vegetarian' : '🥩 Non-Vegetarian'}
            </small>
            <small className="text-body-secondary">
              ${food.pricePerServing / 100}
            </small>
          </p>
          <h2>Instructions</h2>

          <p className="card-text">
            <ol>
              {loading
                ? food.analyzedInstructions[0].steps.map((step) => (
                    <li key={step.number}>{step.step}</li>
                  ))
                : 'loading...'}
            </ol>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredientCard">
            {loading
              ? food.extendedIngredients.map((item) => (
                  <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          src={
                            `https://spoonacular.com/cdn/ingredients_100x100/` +
                            item.image
                          }
                          className="img-fluid rounded-start"
                          alt="..."
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.amount}</p>
                          <p className="card-text">
                            <small className="text-body-secondary">
                              {item.unit}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              : 'Looading...'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
