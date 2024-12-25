import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '@/store/basket/basket.slice'
import { modalReducer } from '@/store/modal/modal.slice'
import { validationFormReducer } from '@/store/validationForm/validationForm.slice'
import { detailsInputsReducer } from '@/store/detailsInputs/detailsInputs.slice'
import { productsSlice } from '@/store/products/products.slice'
import { paymentInputsReducer } from '@/store/paymentInputs/paymentInputs.slice'
import { shippingInputsReducer } from '@/store/shippingInputs/shippingInputs.slice'
import { favoritesReducer } from '@/store/favorites/favorites.slice'
import { logger } from 'redux-logger'

const reducers = combineReducers({
	basket: basketReducer,
	modal: modalReducer,
	validationForm: validationFormReducer,
	detailsInputs: detailsInputsReducer,
	products: productsSlice.reducer,
	paymentInputs: paymentInputsReducer,
	shippingInputs: shippingInputsReducer,
	favorites: favoritesReducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
