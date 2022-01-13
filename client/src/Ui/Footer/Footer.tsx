import React from 'react';
import './Footer.css';
import LOGO from '../../assets/logo.png'
import Visa from '../../assets/Visa.png'
import MC from '../../assets/mc.png'
import AMEX from '../../assets/AMEX.png'
import HZ from '../../assets/hz.png'
import HZ2 from '../../assets/hz2.png'
import JCB from '../../assets/jcb.png'
import { NavLink } from 'react-router-dom';


const Footer = () => {

    return (
        <footer>
            <div>
                <img src={LOGO} alt="" />
                <span>Pet Hemp Company © 2020  </span>
                <div className="BankCards">
                    <img src={AMEX} alt="" />
                    <img src={HZ} alt="" />
                    <img src={HZ2} alt="" />
                    <img src={JCB} alt="" />
                    <img src={MC} alt="" />
                    <img src={Visa} alt="" />
                </div>
                <p>
                    Pet Hemp Company offers the most trusted
                    and highest quality pet CBD products. 
                     Pet Hemp Company provides the highest quality ingredients,
                      balance and consistent dosage,
                      lab test results 
                    and great reviews for their products.
                </p>
            </div>
            <ul>
                <p>Contacts</p>
                <NavLink to="/">
                    Pet Hemp Company <br />
                    7250 Bandini Blvd #207 Commerce, CA 90040
                </NavLink>
                <NavLink to="/">
                    1-833-PET-CBD-1
                </NavLink>
                <NavLink to="/">
                    1-833-738-2231
                </NavLink>
                <NavLink to="/">
                    info@pethempco.com
                </NavLink>
                <NavLink to="/">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-pinterest"></i>
                </NavLink>

            </ul>
            <ul>
                <p>Product</p>
                <NavLink to="/">Product List</NavLink>
                <NavLink to="/">Resources</NavLink>
                <NavLink to="/">Home Remedies</NavLink>
                <NavLink to="/">Wholesale</NavLink>
                <NavLink to="/">Affiliate</NavLink>
            </ul>
            <ul>
                <p>Policy</p>
                <NavLink to="/">Return Policy</NavLink>
                <NavLink to="/">Privacy Policy</NavLink>
                <NavLink to="/">Shipping Policy</NavLink>
                <NavLink to="/">Money Back guarantee</NavLink>
                <NavLink to="/">Social Media</NavLink>
            </ul>
        </footer>
    )
};

export default Footer;