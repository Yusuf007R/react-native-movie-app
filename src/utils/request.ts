import {baseAPI} from '../configs/index';
import {create} from 'apisauce';
import apiKey from '../configs/api-key';

export const request = create({
  baseURL: baseAPI,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {api_key: apiKey},
});
