import { /*URL_GET_ALL_PRODUCTS,*/URL_BACK_CREATE_PRODUCT } from '../../constants/urls/urlBackEnd';
import { URL_GET_ALL_PRODUCTS,URL_GET_ALL_NEW_PRODUCTS} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export function getAll() {
    return apiBackEnd.get(URL_GET_ALL_PRODUCTS);
}

export function getAllNouveau() {
    return apiBackEnd.get(URL_GET_ALL_NEW_PRODUCTS);
}

export const postProduct = async (product)=>{
    
    return apiBackEnd.post(URL_BACK_CREATE_PRODUCT,product);
}

export const detailProduct = async () => {
    return apiBackEnd.get()
}