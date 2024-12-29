import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TInputValues } from '@/types/input-values.types'

interface IShippingInputs {
	optionsRadio: string
	dataValue: string
	dataLabel: string
}
type TShippingValue = string

const initialState: IShippingInputs = {
	optionsRadio: '',
	dataValue: '',
	dataLabel: ''
}

export const shippingInputsSlice = createSlice({
	name: 'shippingInputs',
	initialState,
	reducers: {
		setOptionShipping(state, action: PayloadAction<TInputValues>) {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		},
		setDataValue: (state, action: PayloadAction<TShippingValue>) => {
			const value = action.payload
			console.log(value)
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
