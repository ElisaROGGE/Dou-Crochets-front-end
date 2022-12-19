import  {URL_BACK_ORDER_USER,URL_BACK_COMPLAINT,URL_BACK_GET_RETURNS} from '../../constants/urls/urlBackEnd';
import apiBackEnd from './api.Backend';

export async function supportOrder(token) {

    return apiBackEnd.get(URL_BACK_ORDER_USER+"/"+token)
}

export const postReturn = async (body)=> {

    return apiBackEnd.post(URL_BACK_ORDER_USER, body)
}

export const postComplaint = async (body)=> {

    console.log("test axios ",body)
    return apiBackEnd.post(URL_BACK_COMPLAINT, body)
}

export function supportReturns() {

    return apiBackEnd.get(URL_BACK_GET_RETURNS)
}