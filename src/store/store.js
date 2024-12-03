import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '@/store/basket/basket.slice.js'
import { modalReducer } from '@/store/modal/modal.slice.js'
import { validationFormReducer } from '@/store/validationForm/validationForm.slice.js'
import { shippingInputsReducer } from '@/store/shippingInputs/shippingInputs.slice.js'

const reducers = combineReducers({
	basket: basketReducer,
	modal: modalReducer,
	validationForm: validationFormReducer,
	shippingInputs: shippingInputsReducer
})

export const store = configureStore({
	reducer: reducers
})
