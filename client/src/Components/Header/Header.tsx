import React, { FC } from 'react';
import classes from './Header.module.css';
import LOGO from '../../assets/logo.png'
import SearchIcon from '../../assets/icons/search.png';
import UserIcon from '../../assets/icons/user.png';
import CartIcon from '../../assets/icons/shopping-cart.png';
import { NavLink } from 'react-router-dom';


const Header: FC = () => {


    return(
        <header>
            <div>
                <img src={LOGO} alt="Logo" />
                    
            </div>
            <div className={classes.Navigation}>
                <NavLink to="/shop-by-product">Shop by Product</NavLink>
                <NavLink to="/shop-by-animal">Shop by Animal</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/dosage">Dosage</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </div>
            <div>
                
                    <img src={SearchIcon} alt="Search" style={{cursor: 'pointer'}} />
                

                <button>
                    <img src={UserIcon} alt="User" />
                </button>

                <div className={classes.Cart}>
                    <div>2  -  $56.90</div>
                    <button>
                        <img src={CartIcon} alt="CartIcon" />
                    </button>
                </div>
            </div>
        </header>
    )
};


export default Header;