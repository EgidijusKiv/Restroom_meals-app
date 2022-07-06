import React, { useEffect, useContext } from 'react'
import { myContext } from '../context/context'
import './RandomMeal.scss'

const RandomMeal = () => {
  const { fetchRandomMeal, randomMeal } = useContext(myContext)

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <div className='random'>
      {randomMeal.map((meal) => (
        <div key={meal.idMeal} className='random-grid'>
          <div className='random-grid-controls'>
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} alt="#" />
            <button onClick={fetchRandomMeal}>Generate Another Meal</button>
          </div>

          <div className='random-grid-instructions'>
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RandomMeal