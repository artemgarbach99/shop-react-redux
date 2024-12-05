import style from '@/pages/Details/Details.module.scss'
import Select from 'react-select'
import { useEffect, useState } from 'react'
import '@/pages/Details/select.scss'
import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useSelector } from 'react-redux'

export const Details = ({
	// setModalActive,
	// setModalMessage,
	// modalActive,
	// modalMessage,
	// contactInputValue,
	// handleContactInputChange,
	shippingInputValues,
	handleShippingInputChange,
	handleShippingSelectChange,
	fieldCheck
}) => {
	// const [selectedOption, setSelectedOption] = useState(null);
	const [countries, setCountries] = useState([])
	const [optionsCities, setOptionsCities] = useState([])
	// const [isValid, setIsValid] = useState(true)
	// const [selectedOptionProvince, setSelectedOptionProvince] = useState(null)
	// const [selectedOptionCity, setSelectedOptionCity] = useState(null)]

	// https://countriesnow.space/api/v0.1/countries
	useEffect(() => {
		fetch('https://countriesnow.space/api/v0.1/countries')
			.then(res => res.json())
			.then(json => {
				setCountries(json.data)
				const citiesOptions = json.data.map(country => ({
					value: country.country,
					label: country.country
				}))
				setOptionsCities(citiesOptions)
			})

			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении данных!')
			})
	}, [])

	// контент в селект province
	const optionsProvince = [
		{ value: 'province', label: 'province' },
		{ value: 'region', label: 'region' },
		{ value: 'state', label: 'state' }
	]

	// const showModal = message => {
	// 	setModalMessage(message)
	// 	setModalActive(true)
	// }

	// const fieldCheck = event => {
	// 	const inputs = document.querySelectorAll(`.${style.input} input`)
	//
	// 	let allValid = true // Переменная для проверки валидности
	//
	// 	inputs.forEach(input => {
	// 		if (!input.value.trim()) {
	// 			allValid = false // Обновляем переменную, если находим пустое поле
	// 		}
	// 	})
	//
	// 	if (!shippingInputValues.inputProvince || !shippingInputValues.inputCountry) {
	// 		allValid = false
	// 	}
	//
	// 	setIsValid(allValid) // Обновляем состояние валидности
	//
	// 	if (!allValid) {
	// 		showModal('Заполните поля ввода!')
	// 		event.preventDefault()
	// 	}
	//
	// 	return allValid
	// }

	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const modalReduxMessage = useSelector(state => state.modal.message)

	// shippingInputsSlice
	const shippingInputContacts = useSelector(state => state.shippingInputs.inputContacts)
	const shippingInputAddress = useSelector(state => state.shippingInputs.inputAddress)
	const shippingInputCity = useSelector(state => state.shippingInputs.inputCity)
	const shippingInputCode = useSelector(state => state.shippingInputs.inputCode)
	const shippingInputProvince = useSelector(state => state.shippingInputs.inputProvince)
	const shippingInputCountry = useSelector(state => state.shippingInputs.inputCountry)
	const shippingInputName = useSelector(state => state.shippingInputs.inputName)
	const shippingInputSecondName = useSelector(state => state.shippingInputs.inputSecondName)
	const shippingInputOptional = useSelector(state => state.shippingInputs.inputOptional)

	return (
		<div className={style.details}>
			<div className={style.block}>
				<div className={style.title}>Contact</div>
				<div className={style.input}>
					<input
						type='text'
						name='inputContacts'
						value={shippingInputContacts}
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
								value={shippingInputName}
								onChange={handleShippingInputChange}
								placeholder='Name'
							/>
							{/*<input type='text' name='' id='' placeholder='Name' />*/}
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputSecondName'
								value={shippingInputSecondName}
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
							value={shippingInputAddress}
							// value={shippingInputValues.inputAddress}
							onChange={handleShippingInputChange}
							placeholder='Address and number'
						/>
					</div>
					<div className={style.input}>
						<input
							type='text'
							name='inputOptional'
							value={shippingInputOptional}
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
								value={shippingInputCity}
								// value={shippingInputValues.inputCity}
								onChange={handleShippingInputChange}
								placeholder='City'
							/>
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputCode'
								value={shippingInputCode}
								// value={shippingInputValues.inputCode}
								onChange={handleShippingInputChange}
								placeholder='Postal Code'
							/>
						</div>
						<Select
							name='inputProvince'
							defaultValue={shippingInputProvince}
							// defaultValue={shippingInputValues.inputProvince}
							onChange={handleShippingSelectChange}
							options={optionsProvince}
							className={style.select}
							classNamePrefix='item-select'
							placeholder='province'
						/>
					</div>
					<Select
						name='inputCountry'
						defaultValue={shippingInputCountry}
						// defaultValue={shippingInputValues.inputCountry}
						onChange={handleShippingSelectChange}
						options={optionsCities}
						className={style.select}
						classNamePrefix='item-select'
						placeholder='country'
					/>
				</div>
			</div>
			<NavigationOrder currentPage='details' fieldCheck={fieldCheck} />
			{/*<Modal active={modalActive} message={modalMessage} />*/}
			<Modal active={modalReduxActive} message={modalReduxMessage} />
		</div>
	)
}
