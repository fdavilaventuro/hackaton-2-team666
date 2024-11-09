import axios from 'axios';
import {Item} from "./Item";

export const fetchProducts = async (page: number, pageSize: number) => {
  const response = await axios.get('https://nn1h052dp5.execute-api.us-east-2.amazonaws.com/v1', {
    params: {
      page,
      pageSize,
    },
  });
  return response.data as { products: typeof Item[], totalPages: number };
};