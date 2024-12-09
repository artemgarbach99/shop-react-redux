import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchDetailsCountries = createAsyncThunk('countries/fetchDetailsCountries', async (country, ThunkApi) => {
	try {
		const response = await fetch('https://countriesnow.space/api/v0.1/countries')
		const data = await response.json()
		const citiesOptions = data.data.map(country => ({
			value: country.country,
			label: country.country
		}))
		return citiesOptions
	} catch (error) {
		ThunkApi.rejectWithValue('Ошибка при получении данных стран!')
	}
})
