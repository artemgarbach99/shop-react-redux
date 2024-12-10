import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as basketReducer } from '@/store/basket/basket.slice.js'
import { modalReducer } from '@/store/modal/modal.slice.js'
import { validationFormReducer } from '@/store/validationForm/validationForm.slice.js'
import { detailsInputsReducer } from '@/store/detailsInputs/detailsInputs.slice.js'
import { productsSlice } from '@/store/products/products.slice.js'
import { paymentInputsReducer } from '@/store/paymentInputs/paymentInputs.slice.js'
import { shippingInputsReducer } from '@/store/shippingInputs/shippingInputs.slice.js'
import { favoritesReducer } from '@/store/favorites/favorites.slice.js'

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
	reducer: reducers
})
