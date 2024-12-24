import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/products/products.actions'
import { product } from '@/types/produts.types'

// interface product {
// 	id: number
// 	title: string
// 	image: string
// 	price: number
// 	quantity: number
// }

export interface stateProducts {
	products: product[]
	loading: boolean
	error: string | null
}

const initialState: stateProducts = {
	products: [],
	loading: false,
	error: null
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.loading = true
			})
			.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<product[]>) => {
				state.products = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.rejected, (state, action: any) => {
				state.loading = false
				state.error = action.payload
			})
	}
})
