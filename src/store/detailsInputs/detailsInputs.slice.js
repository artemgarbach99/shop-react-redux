import { createSlice } from '@reduxjs/toolkit'
import { fetchDetailsCountries } from '@/store/detailsInputs/detailsInputs.actions.js'

const initialState = {
	inputContacts: '',
	inputAddress: '',
	inputCity: '',
	inputCode: '',
	inputProvince: null,
	inputCountry: null,
	inputName: '',
	inputSecondName: '',
	inputOptional: '',
	countries: [],
	loading: false,
	error: null
}

export const detailsInputsSlice = createSlice({
	name: 'detailsInputs',
	initialState,
	reducers: {
		setInputValue: (state, action) => {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		}
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDetailsCountries.pending, state => {
				state.loading = true
			})
			.addCase(fetchDetailsCountries.fulfilled, (state, action) => {
				state.countries = action.payload
				state.loading = false
			})
			.addCase(fetchDetailsCountries.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { actions: detailsInputsActions, reducer: detailsInputsReducer } = detailsInputsSlice
