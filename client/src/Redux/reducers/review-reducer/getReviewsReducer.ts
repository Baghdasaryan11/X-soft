
import { IReviewState, ReviewsActionTypes, ReviewsAction } from '../../types/reviews';

const initialState: IReviewState = {
    reviews: [],
    loading: false,
    error: null
}

export const getReviewsReducer = (state = initialState,action: ReviewsAction): IReviewState => {

    switch (action.type) {
        case ReviewsActionTypes.FETCH_REVIEWS:
            return {loading: true, error: null, reviews: []}
        case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
            return {loading: false, error: null, reviews: action.payload}
        case ReviewsActionTypes.FETCH_REVIEWS_ERROR:
            return {loading: false, error: action.payload, reviews: []}
        default:
            return state
    }
}