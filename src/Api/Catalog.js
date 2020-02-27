import Api  from './Api'

const api = new Api({baseURL: 'http://100.0.19.4/api/v1'})

export const getCatalog = () => {
    return api.get('/catalog');
}