import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	optionsRadio: '',
	dataValue: '',
	dataLabel: ''
}

export const shippingInputsSlice = createSlice({
	name: 'shippingInputs',
	initialState,
	reducers: {
		setOptionShipping(state, action) {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		},
		setDataValue: (state, action) => {
			const value = action.payload
			return { ...state, dataValue: value }
		},
		setDataLabel: (state, action) => {
			const label = action.payload
			return { ...state, dataLabel: label }
		},
		clearShippingInputs: () => initialState
	}
})

export const { actions: shippingInputsActions, reducer: shippingInputsReducer } = shippingInputsSlice
