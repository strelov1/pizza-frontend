import axios from 'axios';

import { Token } from "./Token"

class Api {
    constructor({baseURL}) {
        this.client = axios.create({
            baseURL: baseURL,
            timeout: 1000,
            headers: {
                "Content-Type": "application/json",
            },
        });

        this.tokenSevice = new Token();

        this.client.interceptors.request.use(
            request => this.authorizationHanler(request)
        );
    }

    issueToken() {
      return this.post('/token/issue')
    }

    authorizationHanler = (request) => {
      console.log('Token', this.tokenSevice.getToken(), request.url, request.url.indexOf('/catalog'))
      if (! this.tokenSevice.getToken() && request.url.indexOf('/token/issue') !== 0) {
            console.log('Issue Token')
            this.issueToken().then(response => {
                const token = response.data.token;
                this.tokenSevice.saveStorage(token);
                request.headers['Authorization'] = `Bearer ${token}`
            })
      }

      if (this.tokenSevice.getToken()) {
          request.headers['Authorization'] = `Bearer ${this.tokenSevice.getToken()}`
      }
      return request

  }

    async get(url, params = {}) {
        return this.client.get(url, params)
          .then((response) => {
            return response.data;
        });
    }

    async post(url, data, params = {}) {
        return await this.client.post(url, data, params)
          .then((response) => {
            return response.data;
        });
    }

}

export default Api;