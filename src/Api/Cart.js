import Api  from './Api'

const api = new Api({baseURL: 'http://100.0.19.4/api/v1'})

export const addCart = (id) => {
    return api.post('/cart/add', {product_id: id});
}

export const getCount = () => {
    return api.get('/cart/count');
}

export const getCartContent = () => {
    return api.get('/cart/content');
}