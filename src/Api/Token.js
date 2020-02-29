export class Token
{
    getToken() {
       return this.findStoarge();
    }

    findStoarge() {
        const storage = localStorage.getItem('token');
        return storage ? storage : ""
    }

    saveStorage(token) {
        localStorage.setItem('token', token);
    }

}