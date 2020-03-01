import { api }  from './Api'

export const addCart = (id, count) => {
    return api.post('/cart/add', {product_id: id, count});
}

export const updateCart = (id, count) => {
    return api.post('/cart/update', {product_id: id, count});
}


export const getCount = () => {
    return api.get('/cart/count');
}

export const getCartContent = () => {
    return api.get('/cart/content');
}