import React,{useState} from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { assets } from '../../assets/assets';
import { faMagnifyingGlass,faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';



const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState("")
    const {getTotalCartAmount}=useContext(StoreContext)


  return (
    <div className='navbar'>
    
        <Link to='/'><h1 className="navbar-title">SpeedyEats</h1></Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={() => setMenu("home")} className={menu==="home"?"active" : ""}>Home</Link>
            <a href="#explore-menu" onClick={() => setMenu("menu")} className={menu==="menu"?"active" : ""}>Menu</a>
            <a href="#app-download" onClick={() => setMenu("mobile-app")} className={menu==="mobile-app"?"active" : ""}>Mobile-app</a>
            <a href="#footer" onClick={() => setMenu("contact")} className={menu==="contact"?"active" : ""}>Contact Us</a>
        </ul>

        <div className="navbar-right">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search'/>
            <div className="navbar-search-icon">
            <Link to="/cart"><FontAwesomeIcon icon={faBasketShopping} className='basket'/></Link>
                <div className={getTotalCartAmount()===0?"" : "dot"}></div>
            </div>
            <button onClick={()=> setShowLogin(true)} >sign in</button>
            
        </div>

    </div>
  )
}

export default Navbar