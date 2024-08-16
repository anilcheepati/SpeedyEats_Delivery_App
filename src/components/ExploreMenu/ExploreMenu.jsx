import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id="explore-menu">
            <h1>Explore our Menu</h1>
            <p>Dive into our menu and discover a world of flavors waiting for you. From hearty favorites to gourmet surprises, there’s something to satisfy every craving.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div 
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu