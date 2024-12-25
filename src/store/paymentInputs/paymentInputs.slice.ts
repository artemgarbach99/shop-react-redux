import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInputValues } from '@/types/input-values.types'

interface IPaymentInputs {
	cardNumber: string
	holderName: string
	expiration: string
	cvvCode: string
	vatNumber: string
	pecOptional: string
	billingAddress: string
}

const initialState: IPaymentInputs = {
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
		setValuePayment(state, action: PayloadAction<TInputValues>) {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		},
		clearPaymentsInputs: () => initialState
	}
})
export const { actions: paymentInputsActions, reducer: paymentInputsReducer } = paymentInputsSlice
