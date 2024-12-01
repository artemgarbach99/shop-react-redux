import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '@/store/basket/basket.slice.js'
import { modalReducer } from '@/store/modal/modal.slice.js'

const reducers = combineReducers({
	basket: basketReducer,
	modal: modalReducer
})

export const store = configureStore({
	reducer: reducers
})
