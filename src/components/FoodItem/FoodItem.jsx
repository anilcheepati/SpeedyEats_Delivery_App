import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({id,name,image,price,description}) => {

    
    const {cartItem,addToCart,removeFromCart} = useContext(StoreContext)

  return (
    <div className="food-item">
        <div className="food-item-img-container">
            <img  className="food-item image" src={image} alt="" />
            {
                !cartItem[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                :<div className='food-item-counter'>
                    <img className="adding" onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItem[id]}</p>
                    <img className="removing" onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

                </div>
            }
        </div>

        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem