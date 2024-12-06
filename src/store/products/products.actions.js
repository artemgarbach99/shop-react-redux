import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (product, ThunkApi) => {
	try {
		const response = await fetch('https://fakestoreapi.in/api/products')
		const data = await response.json()
		return data.products
	} catch (error) {
		ThunkApi.rejectWithValue('Ошибка при получении данных!')
	}
})
