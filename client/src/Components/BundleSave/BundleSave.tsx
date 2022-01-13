import React, { useEffect } from 'react';
import './BundleSave.css';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { fetchPopularProducts } from '../../Redux/action-creators/products';
import Spinner from '../../Ui/Spinner/Spiner';

const BundleSave = () => {


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
        <div className="BundleSave">
            <ProductsSlider items={popularProducts} initialCount={3}/>
        </div>
    )
};

export default BundleSave;
