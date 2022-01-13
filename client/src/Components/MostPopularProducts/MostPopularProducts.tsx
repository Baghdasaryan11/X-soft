import React, { useEffect } from 'react';
import classes from './MostPopularProducts.module.css';
import FacebookIcon from '../../assets/BrendLogos/Facebook.png'
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import { useDispatch } from 'react-redux';
import {useTypedSelector} from '../../Hooks/useTypedSelector';
import {fetchPopularProducts} from '../../Redux/action-creators/products'
import Spinner from '../../Ui/Spinner/Spiner';
const MostPopularProducts = () => {

    const dispatch = useDispatch();
    const {popularProducts,loading,error} = useTypedSelector(state => state.popularProducts)

    useEffect(() => {
        dispatch(fetchPopularProducts())
    },[]);


    if(loading){
        return(
            <div style={{width:'100%', display: 'flex', justifyContent: 'center'}}>
                <Spinner />
            </div>
        )
    }
    if(error){
        return(
            <h1 style={{textAlign: 'center'}}>{error}</h1>
        )
    }

    return(
        <section className={classes.MostPopularProducts}>
            <div className={classes.top}>
                <p>Our Most Popular Products &nbsp; &nbsp; &nbsp; <i className="fas fa-chevron-down"></i></p>
                <img src={FacebookIcon} alt="" width="162px" height="32px" />
            </div>
            <div className={classes.AnimalTypes}>
                <ul>
                    <li className={classes.Active}>Dog Treats</li>
                    <li>Cat Treats</li>
                    <li>CBD Tinctures</li>
                    <li>CBD Capsules</li>
                </ul>

                <div className={classes.SelectAnimal}>
                Type of Pet 
                <i className="fas fa-chevron-down"></i>
                </div>
            </div>
            <div className={classes.ProductsSlider}>
                <ProductsSlider items={popularProducts}/>
            </div>
        </section>
    )
};

export default MostPopularProducts;