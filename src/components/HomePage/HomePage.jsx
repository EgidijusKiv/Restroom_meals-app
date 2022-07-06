import React, { useState, useCallback, useContext } from 'react'
import './HomePage.scss'
import '../RandomMeal/RandomMeal.scss'
import { myContext } from "../context/context";
import { HiChevronDoubleLeft } from 'react-icons/hi'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchHomePageMeals, meals, fetchMealById, mealsById } = useContext(myContext);
  const [imgClick, setImgClick] = useState(false);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  return (!imgClick ?
    <div className='home'>
      <div className='home-search'>
        <input
          type="text"
          placeholder='Type a meal name...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>

      <div className='home-grid'>
        {meals ? (
          meals.map((meal) => <div className='home-meal' key={meal.idMeal}>
            <img
              onClick={() => {
                fetchMealById(meal.idMeal);
                setImgClick(true);
              }}
              src={meal.strMealThumb}
              alt='#' />
            <h4>{meal.strMeal}</h4>
          </div>)
        ) : (
          <h2>No Meals found! Try another word...</h2>
        )}
      </div>

    </div>
    :
    <div className='random'>
      {mealsById.map((meal) => (
        <div key={meal.idMeal} className='random-grid'>
          <button className='back' onClick={() => setImgClick(false)}><HiChevronDoubleLeft /> Back</button>
          <div className='random-grid-controls'>
            <h4>{meal.strMeal}</h4>
            <img src={meal.strMealThumb} alt="#" />
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

export default HomePage



