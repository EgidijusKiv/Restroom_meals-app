import React, { useEffect, useContext } from 'react'
import { myContext } from '../context/context'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categories = () => {
  const { fetchCategories, categories } = useContext(myContext);
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories])
  return (
    <div className='categories'>
      {categories.map(category => (
        <div key={category.idCategory}>
          <Link  to="/">
            <img src={category.strCategoryThumb} alt="#" />
          </Link>
          <h4>{category.strCategory}</h4>
        </div>
      ))}
    </div>
  )
}

export default Categories