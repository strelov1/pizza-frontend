import axios from 'axios';

class Api {
    constructor({baseURL}) {
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 1000,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    async get(url, params = {}) {
        return this.client.get(url, params)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });;
    }

    async post(url, data, params = {}) {
        return await this.client.post(url, data, params)
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          console.log(error);
        });;
    }

}

export default Api;