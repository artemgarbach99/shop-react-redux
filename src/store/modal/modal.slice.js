import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	message: null
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		modalActive: (state, action) => {
			state.isOpen = true
			state.message = action.payload
		},
		modalClosed: state => {
			state.isOpen = false
			state.message = null
		}
	}
})
// export const { actions, reducer } = modalSlice
export const { actions: modalActions, reducer: modalReducer } = modalSlice
