
import { Dispatch } from 'redux';
import {PopularProductsAction,PopularProductsActionTypes} from '../types/products';
import axios from "axios";


export const fetchPopularProducts = () => {

    return async (dispatch:Dispatch<PopularProductsAction>) => {
        try {
            dispatch({type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS, });
            const response = await axios.get('/api/products',{
                headers: {
                    'content-type': 'application/json'
                 }
            });

            dispatch({type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_SUCCESS, payload:response.data})
        } catch (error) {
            dispatch({type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_ERROR, payload: "Something goes wrong"})
            
        }
    }
}