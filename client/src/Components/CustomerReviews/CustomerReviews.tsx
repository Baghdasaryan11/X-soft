import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { fetchReviews } from '../../Redux/action-creators/reviews';
import ProductsSlider2 from '../ProductsSlider2/ProductsSlider2';

import'./CustomerReviews.css';


const CustomerReviews = () => {

    const dispatch = useDispatch();
    const {reviews,loading,error} = useTypedSelector(state => state.reviews);


  useEffect(() => {

    dispatch(fetchReviews())
  },[])
    return(
        <div className={"CustomerReviews"}>
           <ProductsSlider2 items={reviews}/>
        </div>
    )
};

export default CustomerReviews;