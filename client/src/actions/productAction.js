import axios from 'axios';
import {FETCH_PRODUCTS} from './types'
export const fetchProducts = () => async dispatch =>{
        let res = await axios.get('/api/products');
         console.log(res.data);
        dispatch({type:FETCH_PRODUCTS,payload:res.data});
    }



