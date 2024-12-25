import { createAsyncThunk } from '@reduxjs/toolkit'

export type TCountry = {
	value: string
	label: string
	country: string
}

export const fetchDetailsCountries = createAsyncThunk('countries/fetchDetailsCountries', async (country, ThunkApi) => {
	try {
		const response = await fetch('https://countriesnow.space/api/v0.1/countries')
		const data = await response.json()
		const citiesOptions: TCountry[] = data.data.map((country: TCountry) => ({
			value: country.country,
			label: country.country
		}))
		return citiesOptions
	} catch (error) {
		return ThunkApi.rejectWithValue('Ошибка при получении данных стран!')
	}
})
