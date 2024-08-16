import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faLinkedin, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const getCurrentYear = () => new Date().getFullYear();
    return (
        <div className='footer' id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h1 className="footer-title">SpeedyEats</h1>
                    <p>"Every meal is a journey, and we’re here to bring the world’s finest flavors right to your doorstep, ensuring that every bite is a delightful experience."</p>
                    <div className="footer-social-icons">
                        <div className="icons">
                            <FontAwesomeIcon icon={faSquareFacebook} />
                            <FontAwesomeIcon icon={faLinkedin} />
                            <FontAwesomeIcon icon={faSquareTwitter} />
                            <FontAwesomeIcon icon={faSquareInstagram} />

                        </div>


                    </div>

                </div>

                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1 999 007 1234</li>
                        <li>speedyeats@gmail.com</li>
                    </ul>

                </div>



            </div>
            <hr />
            <p className="footer-copyrights">Copyright {getCurrentYear()} @SpeedyEats - All Rights are Reserved</p>

        </div>
    )
}

export default Footer