import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isValid: true
}

export const validationFormSlice = createSlice({
	name: 'validationForm',
	initialState,
	reducers: {
		valid: state => {
			state.isValid = true
		},
		invalid: state => {
			state.isValid = false
		}
	}
})

export const { actions: validationFormActions, reducer: validationFormReducer } = validationFormSlice
