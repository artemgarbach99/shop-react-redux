import { createSlice } from '@reduxjs/toolkit'
import { product } from '@/types/produts.types'

export interface stateBasket {
	basket: product[]
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
		AddToBasket: (state, action: { payload: product }) => {
			const product = action.payload
			if (state.basket.some(prod => prod.id === product.id)) return
			state.basket.push({ ...product, quantity: 1 })
			state.totalPrice += product.price
		},
		RemoveFromBasket: (state, action: { payload: product }) => {
			// const product = action.payload
			// return state.basket.filter(prod => prod.id !== product)
			const { id, price, quantity } = action.payload
			return {
				...state,
				basket: state.basket.filter(prod => prod.id !== id),
				totalPrice: state.totalPrice - price * quantity
			}
		},
		UpdateQuantity: (state, action: { payload: product }) => {
			const { id, quantity } = action.payload
			// state.basket.map(prod => (prod.id === id ? { ...prod, quantity } : prod))
			const product = state.basket.find(prod => prod.id === id)
			const priceDifference = (quantity - product.quantity) * product.price
			return {
				...state,
				basket: state.basket.map(prod => (prod.id === id ? { ...prod, quantity } : prod)),
				totalPrice: state.totalPrice + priceDifference
			}
		},
		clearBasket: state => {
			state.basket = []
			state.totalPrice = 0
		}
	}
})
export const { actions, reducer } = basketSlice
