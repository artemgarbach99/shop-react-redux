import { createSlice } from '@reduxjs/toolkit'
import { IProduct, removeFromBasket, updateQuantity } from '@/types/produts.types'

export interface stateBasket {
	basket: IProduct[]
	totalPrice: number
}

const initialState: stateBasket = {
	basket: [],
	totalPrice: 0
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		AddToBasket: (state, action: { payload: IProduct }) => {
			const product = action.payload
			if (state.basket.some(prod => prod.id === product.id)) return
			state.basket.push({ ...product, quantity: 1 })
			state.totalPrice += product.price
		},
		RemoveFromBasket: (state, action: { payload: removeFromBasket }) => {
			const { id, price, quantity } = action.payload
			return {
				...state,
				basket: state.basket.filter(prod => prod.id !== id),
				totalPrice: state.totalPrice - price * quantity
			}
		},
		UpdateQuantity: (state, action: { payload: updateQuantity }) => {
			const { id, quantity } = action.payload
			const product = state.basket.find(prod => prod.id === id)
			const priceDifference: number | undefined = product && (quantity - product.quantity) * product.price
			return {
				...state,
				basket: state.basket.map(prod => (prod.id === id ? { ...prod, quantity } : prod)),
				totalPrice: state.totalPrice + (priceDifference || 0)
			}
		},
		clearBasket: state => {
			state.basket = []
			state.totalPrice = 0
		}
	}
})
export const { actions, reducer } = basketSlice
