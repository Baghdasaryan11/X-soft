
import { Dispatch } from 'redux';
import {ReviewsAction,ReviewsActionTypes} from '../types/reviews';
import axios from "axios";


export const fetchReviews = () => {

    return async (dispatch:Dispatch<ReviewsAction>) => {
        try {
            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS, });
            const response = await axios.get('/api/reviews',{
                headers: {
                    'content-type': 'application/json'
                 }
            });

            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload:response.data})
        } catch (error) {
            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS_ERROR, payload: "Something goes wrong"})
            
        }
    }
}