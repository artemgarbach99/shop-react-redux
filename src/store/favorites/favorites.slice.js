import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: [],
	isFavorited: false
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorite: (state, action) => {
			const card = action.payload
			// if (state.favorites.some(item => item.id === card.id)) return
			state.favorites.push(card)
		},
		removeFromFavorite: (state, action) => {
			const card = action.payload
			return {
				...state,
				favorites: state.favorites.filter(item => item.id !== card.id)
			}
		}
	}
})
export const { actions: favoritesActions, reducer: favoritesReducer } = favoritesSlice
