import React from 'react'
import { assets } from '../assets/assets'
import "./FoodItem.css"

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
       <div className="food-item-img-container">
          <img  className="food-item-image" src={image} alt=""></img>
       </div>
       <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src ={assets.rating_starts}></img>
          </div>
          <p className="food-item-description">
            {description}
          </p>
          <p className="food-item-price">${price}</p>
       </div>
    </div>
  )
}

export default FoodItem
