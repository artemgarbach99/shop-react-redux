import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	cardNumber: '',
	holderName: '',
	expiration: '',
	cvvCode: '',
	vatNumber: '',
	pecOptional: '',
	billingAddress: ''
}

export const paymentInputsSlice = createSlice({
	name: 'paymentInputs',
	initialState,
	reducers: {
		setValuePayment(state, action) {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		}
	}
})
export const { actions: paymentInputsActions, reducer: paymentInputsReducer } = paymentInputsSlice
