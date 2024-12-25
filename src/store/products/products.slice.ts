import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/products/products.actions'
import { IProduct } from '@/types/produts.types'

export interface stateProducts {
	products: IProduct[]
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
			.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
				state.products = action.payload
				state.loading = false
			})
			.addCase(fetchProducts.rejected, (state, action: any) => {
				state.loading = false
				state.error = action.payload
			})
	}
})
