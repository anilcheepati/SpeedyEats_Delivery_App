import React,{useState} from 'react'
import "./Header.css"


const Header = () => {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Savor the Flavor! Your Next Meal is Just a Click Away.</h2>
            <p>Explore our diverse menu and enjoy a quick, delicious meal delivered right to your door. Whether you're in the mood for comfort food or something new, we’ve got you covered with quality ingredients and speedy service.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header