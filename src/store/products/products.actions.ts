import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '@/types/produts.types'

interface ApiResponse {
	products: IProduct[]
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (product, ThunkApi) => {
	try {
		const response = await fetch('https://fakestoreapi.in/api/products')
		const data: ApiResponse = await response.json()
		return data.products
	} catch (error) {
		return ThunkApi.rejectWithValue('Ошибка при получении данных!')
	}
})
