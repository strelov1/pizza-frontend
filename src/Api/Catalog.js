import { api }  from './Api'

export const getCatalog = () => {
    return api.get('/catalog');
}