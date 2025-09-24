import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '@/types/produts.types'

interface ApiResponse {
	products: IProduct[]
}

export const fetchProducts = createAsyncThunk<IProduct[], void, { rejectValue: string }>(
	'products/fetchProducts',
	async (_arg, thunkAPI) => {
		try {
			const response = await fetch('https://api.escuelajs.co/api/v1/products')
			if (!response.ok) {
				return thunkAPI.rejectWithValue('Ошибка при получении данных!')
			}
			const data = (await response.json()) as IProduct[]
			return data
		} catch {
			return thunkAPI.rejectWithValue('Ошибка при получении данных!')
		}
	}
)

// https://api.escuelajs.co/api/v1/products
// https://fakestoreapi.in/api/products
