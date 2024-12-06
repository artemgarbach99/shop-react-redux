import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/products/products.actions.js'

const initialState = {
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
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	}
})
