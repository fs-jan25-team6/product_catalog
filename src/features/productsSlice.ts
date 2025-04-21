import { createSlice } from '@reduxjs/toolkit';
import products from '../components/temp/products.json';

const initialState = products;

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});
