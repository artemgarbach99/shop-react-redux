import style from '@/pages/Details/Details.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import '@/pages/Details/select.scss'
import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { detailsInputsActions } from '@/store/detailsInputs/detailsInputs.slice.js'
import { fetchDetailsCountries } from '@/store/detailsInputs/detailsInputs.actions.js'

export const Details = ({ fieldCheck }) => {
	// const [selectedOption, setSelectedOption] = useState(null);
	// const [countries, setCountries] = useState([])
	// const [isValid, setIsValid] = useState(true)
	// const [selectedOptionProvince, setSelectedOptionProvince] = useState(null)
	// const [selectedOptionCity, setSelectedOptionCity] = useState(null)]

	const dispatch = useDispatch()

	//! добавить в redux

	// const [optionsCities, setOptionsCities] = useState([])

	// https://countriesnow.space/api/v0.1/countries
	// useEffect(() => {
	// 	fetch('https://countriesnow.space/api/v0.1/countries')
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			// setCountries(json.data)
	// 			const citiesOptions = json.data.map(country => ({
	// 				value: country.country,
	// 				label: country.country
	// 			}))
	// 			setOptionsCities(citiesOptions)
	// 		})
	//
	// 		.catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка при получении данных!')
	// 		})
	// }, [])

	// redux
	useEffect(() => {
		dispatch(fetchDetailsCountries())
	}, [dispatch])

	const { countries, loading, error } = useSelector(state => state.detailsInputs)

	// контент в селект province
	const optionsProvince = [
		// { value: 'province', label: 'province' },
		// { value: 'region', label: 'region' },
		// { value: 'state', label: 'state' }
		{ value: 'province', label: 'Province' },
		{ value: 'region', label: 'Region' },
		{ value: 'state', label: 'State' },
		{ value: 'city', label: 'City' },
		{ value: 'district', label: 'District' },
		{ value: 'county', label: 'County' },
		{ value: 'municipality', label: 'Municipality' },
		{ value: 'territory', label: 'Territory' },
		{ value: 'division', label: 'Division' }
	]

	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const modalReduxMessage = useSelector(state => state.modal.message)

	// shippingInputsSlice
	const detailsInputContacts = useSelector(state => state.detailsInputs.inputContacts)
	const detailsInputsAddress = useSelector(state => state.detailsInputs.inputAddress)
	const detailsInputsCity = useSelector(state => state.detailsInputs.inputCity)
	const detailsInputsCode = useSelector(state => state.detailsInputs.inputCode)
	const detailsInputsProvince = useSelector(state => state.detailsInputs.inputProvince)
	const detailsInputsCountry = useSelector(state => state.detailsInputs.inputCountry)
	const detailsInputsName = useSelector(state => state.detailsInputs.inputName)
	const detailsInputsSecondName = useSelector(state => state.detailsInputs.inputSecondName)
	const detailsInputsOptional = useSelector(state => state.detailsInputs.inputOptional)

	const handleShippingInputChange = event => {
		const { name, value } = event.target
		dispatch(detailsInputsActions.setInputValue({ name, value }))
	}

	const handleShippingSelectChange = (selectedOption, actionMeta) => {
		const { name } = actionMeta
		const { value } = selectedOption
		dispatch(detailsInputsActions.setInputValue({ name, value }))
	}

	return (
		<div className={style.details}>
			<div className={style.block}>
				<div className={style.title}>Contact</div>
				<div className={style.input}>
					<input
						type='text'
						name='inputContacts'
						value={detailsInputContacts}
						onChange={handleShippingInputChange}
						placeholder='Email or mobile phone number'
					/>
				</div>
			</div>
			<div className={style.block}>
				<div className={style.title}>Shipping Address</div>
				<div className={style.inputs}>
					<div className={style.row}>
						<div className={style.input}>
							<input
								type='text'
								name='inputName'
								value={detailsInputsName}
								onChange={handleShippingInputChange}
								placeholder='Name'
							/>
							{/*<input type='text' name='' id='' placeholder='Name' />*/}
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputSecondName'
								value={detailsInputsSecondName}
								onChange={handleShippingInputChange}
								placeholder='Second Name'
							/>
							{/*<input type='text' name='' id='' placeholder='Second Name' />*/}
						</div>
					</div>
					<div className={style.input}>
						<input
							type='text'
							name='inputAddress'
							value={detailsInputsAddress}
							// value={shippingInputValues.inputAddress}
							onChange={handleShippingInputChange}
							placeholder='Address and number'
						/>
					</div>
					<div className={style.input}>
						<input
							type='text'
							name='inputOptional'
							value={detailsInputsOptional}
							onChange={handleShippingInputChange}
							placeholder='Shipping note (optional)'
						/>
						{/*<input type='text' name='' id='' placeholder='Shipping note (optional)' />*/}
					</div>
					<div className={style.row}>
						<div className={style.input}>
							<input
								type='text'
								name='inputCity'
								value={detailsInputsCity}
								// value={shippingInputValues.inputCity}
								onChange={handleShippingInputChange}
								placeholder='City'
							/>
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputCode'
								value={detailsInputsCode}
								// value={shippingInputValues.inputCode}
								onChange={handleShippingInputChange}
								placeholder='Postal Code'
							/>
						</div>
						<Select
							name='inputProvince'
							value={optionsProvince.find(option => option.value === detailsInputsProvince)}
							// defaultValue={detailsInputsProvince}
							// defaultValue={shippingInputValues.inputProvince}
							onChange={handleShippingSelectChange}
							options={optionsProvince}
							className={style.select}
							classNamePrefix='item-select'
							placeholder='region'
						/>
					</div>
					<Select
						name='inputCountry'
						value={countries.find(option => option.value === detailsInputsCountry)}
						// defaultValue={detailsInputsCountry}
						// defaultValue={shippingInputValues.inputCountry}
						onChange={handleShippingSelectChange}
						options={countries}
						className={style.select}
						classNamePrefix='item-select'
						placeholder='country'
					/>
				</div>
			</div>
			<NavigationOrder currentPage='details' fieldCheck={fieldCheck} />
			<Modal active={modalReduxActive} message={modalReduxMessage} />
		</div>
	)
}
