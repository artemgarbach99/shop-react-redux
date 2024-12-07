import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	inputContacts: '',
	inputAddress: '',
	inputCity: '',
	inputCode: '',
	inputProvince: null,
	inputCountry: null,
	inputName: '',
	inputSecondName: '',
	inputOptional: ''
}

export const detailsInputsSlice = createSlice({
	name: 'detailsInputs',
	initialState,
	reducers: {
		setInputValue: (state, action) => {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		}
	}
})

export const { actions: detailsInputsActions, reducer: detailsInputsReducer } = detailsInputsSlice
