import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IStateModal {
	isOpen: boolean
	message: string | null
}

const initialState: IStateModal = {
	isOpen: false,
	message: null
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		modalActive: (state, action: PayloadAction<string>) => {
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
