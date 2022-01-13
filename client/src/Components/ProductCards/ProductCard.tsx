import React from 'react';
import classes from './ProductCard.module.css';

import ProductImage from '../../assets/Products/Product1.png';

export interface IProductCardProps{
    name?: String;
    company?: String;
    price?: String | Number;
    picture?: String

}


const ProductCard = ({name, company, price, picture}: IProductCardProps) => {

    return(
        <div className={classes.ProductCard}>
            
            <div style={{backgroundColor: '#EDF7F7'}}>
                <img src={picture as string} alt="Product" className={classes.ProductImage} />
            </div>
            <p className={classes.ProductName}>
            {name}
            </p>

            <span className={classes.CompanyName}>{company}</span>

            <p className={classes.ProductPrice}>$ {price}</p>
        </div>
    )
};

export default ProductCard;