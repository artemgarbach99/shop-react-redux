import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInputValues } from '@/types/input-values.types'

export interface IPaymentInputs {
	cardNumber: number | null
	holderName: string
	expiration: number | null
	cvvCode: number | null
	vatNumber: string
	pecOptional: string
	billingAddress: string
}

const initialState: IPaymentInputs = {
	cardNumber: null,
	holderName: '',
	expiration: null,
	cvvCode: null,
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
