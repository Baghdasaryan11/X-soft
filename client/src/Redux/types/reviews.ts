interface IReview{
    videoLink: String;
    title: String;
    post: String;
    author: String;
    company: String;
    
};

export interface IReviewState {
    reviews:IReview[];
    loading: boolean;
    error: null | string;
}
export enum ReviewsActionTypes {
    FETCH_REVIEWS = "FETCH_REVIEWS",
    FETCH_REVIEWS_SUCCESS = "FETCH_REVIEWS_SUCCESS",
    FETCH_REVIEWS_ERROR = "FETCH_REVIEWS_ERROR"
}

interface IFetchReviewsAction {
    type: ReviewsActionTypes.FETCH_REVIEWS
}
interface IFetchReviewsSuccessAction {
    type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS;
    payload: any[]
}
interface IFetchReviewsErrorAction {
    type: ReviewsActionTypes.FETCH_REVIEWS_ERROR;
    payload: string;
}


export type ReviewsAction = IFetchReviewsAction | IFetchReviewsSuccessAction | IFetchReviewsErrorAction
