interface IProduct{
    name: String;
    company: String;
    price: String | Number
};

export interface IPopularProductsState {
    popularProducts:IProduct[];
    loading: boolean;
    error: null | string;
}
export enum PopularProductsActionTypes {
    FETCH_POPULAR_PRODUCTS = "FETCH_POPULAR_PRODUCTS",
    FETCH_POPULAR_PRODUCTS_SUCCESS = "FETCH_POPULAR_PRODUCTS_SUCCESS",
    FETCH_POPULAR_PRODUCTS_ERROR = "FETCH_POPULAR_PRODUCTS_ERROR"
}

interface IFetchPopularProductsAction {
    type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS
}
interface IFetchPopularProductsSuccessAction {
    type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_SUCCESS;
    payload: any[]
}
interface IFetchPopularProductsErrorAction {
    type: PopularProductsActionTypes.FETCH_POPULAR_PRODUCTS_ERROR;
    payload: string;
}


export type PopularProductsAction = IFetchPopularProductsAction | IFetchPopularProductsSuccessAction | IFetchPopularProductsErrorAction
