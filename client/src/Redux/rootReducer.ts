import { combineReducers } from "redux";
import {popularProductsReducer} from './reducers/product-reducer/popularProductsReducer'
import {getReviewsReducer} from './reducers/review-reducer/getReviewsReducer'

export const rootReducer = combineReducers({
    popularProducts: popularProductsReducer,
    reviews: getReviewsReducer
});

export type RootState = ReturnType <typeof rootReducer>
