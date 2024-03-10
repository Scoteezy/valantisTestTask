import { Product } from '@/entities/product';
import md5 from 'md5';

import { Filters } from '../model/types';
const BASE_URL = 'https://api.valantis.store:41000/';
const PASSWORD = 'Valantis';

export interface Params {
	[key: string]: unknown;
}


interface FetchParams {
    action?: string,
    params?: Filters | Params,
}
const generateAuthHeader = ()=>{
  const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');

  return  md5(`${PASSWORD}_${timestamp}`);
};

export const fetchProducts = async ({action='get_ids', params={}}:FetchParams):Promise<Product[] | string[]| undefined>=>{
  try{
    const response = await fetch(BASE_URL,{
      method: 'POST',
      headers: {
        'X-Auth': generateAuthHeader(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({action, params})
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    const data:string[] = result.result;

    return [...new Set(data)];

  }catch(e){
    console.log(e);
  }
};