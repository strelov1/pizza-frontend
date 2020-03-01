import { api }  from './Api'

export const createOrder = (form) => {
    return api.post('/order/create', form);
}

export const getlastOrderData = () => {
    return api.get('/order/last');
}

export const getOrdersHistory = () => {
    return api.get('/order/history');
}