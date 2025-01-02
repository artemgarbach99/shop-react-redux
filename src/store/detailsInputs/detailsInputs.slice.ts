import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDetailsCountries, TCountry } from '@/store/detailsInputs/detailsInputs.actions'
import { ISelectValues, TInputValues } from '@/types/input-values.types'

export interface IStateDetailsInputs {
	inputContacts: string
	inputAddress: string
	inputCity: string
	inputCode: string
	inputProvince: string
	inputCountry: string
	inputName: string
	inputSecondName: string
	inputOptional: string
	countries: TCountry[]
	loading: boolean
	error: string | null
}

const initialState: IStateDetailsInputs = {
	inputContacts: '',
	inputAddress: '',
	inputCity: '',
	inputCode: '',
	inputProvince: '',
	inputCountry: '',
	// inputProvince: null,
	// inputCountry: null,
	inputName: '',
	inputSecondName: '',
	inputOptional: '',
	countries: [],
	loading: false,
	error: null
}

export const detailsInputsSlice = createSlice({
	name: 'detailsInputs',
	initialState,
	reducers: {
		setInputValue: (state, action: PayloadAction<TInputValues>) => {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		},
		setValueSelect: (state, action: PayloadAction<ISelectValues>) => {
			const { name, value } = action.payload
			return { ...state, [name]: value }
		},
		clearDetailsInputs: () => initialState
	},
	extraReducers: builder => {
		builder
			.addCase(fetchDetailsCountries.pending, state => {
				state.loading = true
			})
			.addCase(fetchDetailsCountries.fulfilled, (state, action: PayloadAction<TCountry[]>) => {
				state.countries = action.payload
				state.loading = false
			})
			.addCase(fetchDetailsCountries.rejected, (state, action: any) => {
				state.loading = false
				state.error = action.payload
			})
	}
})

export const { actions: detailsInputsActions, reducer: detailsInputsReducer } = detailsInputsSlice
