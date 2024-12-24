import { createSlice } from '@reduxjs/toolkit'
import { product } from '@/types/produts.types'

interface StateFavorites {
	favorites: product[]
	isFavorited: boolean
}

const initialState: StateFavorites = {
	favorites: [],
	isFavorited: false
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorite: (state, action: { payload: product }) => {
			const card = action.payload
			// if (state.favorites.some(item => item.id === card.id)) return
			state.favorites.push(card)
		},
		removeFromFavorite: (state, action: { payload: product }) => {
			const card = action.payload
			return {
				...state,
				favorites: state.favorites.filter(item => item.id !== card.id)
			}
		}
	}
})
export const { actions: favoritesActions, reducer: favoritesReducer } = favoritesSlice
