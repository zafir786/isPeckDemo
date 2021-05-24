import axios from 'axios';

export default class Services {

    getProductsSmall() {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data);
    }

    getProducts() {
        return axios.get('data/products.json').then(res => res.data.data);
    }

    getProductsWithOrdersSmall() {
        return axios.get('data/products-orders-small.json').then(res => res.data.data);
    }
}