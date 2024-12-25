import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types/produts.types'

interface IStateFavorites {
	favorites: IProduct[]
	// isFavorited: boolean
}

const initialState: IStateFavorites = {
	favorites: []
	// isFavorited: false
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addToFavorite: (state, action: PayloadAction<IProduct>) => {
			const card = action.payload
			// if (state.favorites.some(item => item.id === card.id)) return
			state.favorites.push(card)
		},
		removeFromFavorite: (state, action: { payload: IProduct }) => {
			const card = action.payload
			return {
				...state,
				favorites: state.favorites.filter(item => item.id !== card.id)
			}
		}
	}
})
export const { actions: favoritesActions, reducer: favoritesReducer } = favoritesSlice
