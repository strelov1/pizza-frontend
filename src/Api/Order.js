import { api }  from './Api'

export const createOrder = (form) => {
    return api.post('/order/create', form);
}