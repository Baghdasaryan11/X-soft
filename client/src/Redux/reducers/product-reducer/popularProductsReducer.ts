
import { IPopularProductsState, PopularProductsActionTypes, PopularProductsAction } from '../../types/products';

const initialState: IPopularProductsState = {
    popularProducts: [],
    loading: false,
    error: null
}

export const popularProductsReducer = (state = initialState,action: PopularProductsAction): IPopularProductsState => {

    switch (action.type) {
        case PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS:
            return {loading: true, error: null, popularProducts: []}
        case PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_SUCCESS:
            return {loading: false, error: null, popularProducts: action.payload}
        case PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_ERROR:
            return {loading: false, error: action.payload, popularProducts: []}
        default:
            return state
    }
}