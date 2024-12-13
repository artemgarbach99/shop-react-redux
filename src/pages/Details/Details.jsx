import style from '@/pages/Details/Details.module.scss'
import Select from 'react-select'
import { useEffect } from 'react'
import '@/pages/Details/select.scss'
import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { detailsInputsActions } from '@/store/detailsInputs/detailsInputs.slice.js'
import { fetchDetailsCountries } from '@/store/detailsInputs/detailsInputs.actions.js'
import { useDetails } from '@/hooks/useDetails.js'

export const Details = ({ fieldCheck }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDetailsCountries())
	}, [dispatch])

	const optionsProvince = [
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
	const { countries, loading, error } = useSelector(state => state.detailsInputs)
	const { isOpen, message } = useSelector(state => state.modal)

	const {
		inputContacts,
		inputAddress,
		inputCity,
		inputCode,
		inputProvince,
		inputCountry,
		inputName,
		inputSecondName,
		inputOptional
	} = useDetails()

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
						value={inputContacts}
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
								value={inputName}
								onChange={handleShippingInputChange}
								placeholder='Name'
							/>
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputSecondName'
								value={inputSecondName}
								onChange={handleShippingInputChange}
								placeholder='Second Name'
							/>
						</div>
					</div>
					<div className={style.input}>
						<input
							type='text'
							name='inputAddress'
							value={inputAddress}
							onChange={handleShippingInputChange}
							placeholder='Address and number'
						/>
					</div>
					<div className={style.input}>
						<input
							type='text'
							name='inputOptional'
							value={inputOptional}
							onChange={handleShippingInputChange}
							placeholder='Shipping note (optional)'
						/>
					</div>
					<div className={style.row}>
						<div className={style.input}>
							<input
								type='text'
								name='inputCity'
								value={inputCity}
								onChange={handleShippingInputChange}
								placeholder='City'
							/>
						</div>
						<div className={style.input}>
							<input
								type='text'
								name='inputCode'
								value={inputCode}
								onChange={handleShippingInputChange}
								placeholder='Postal Code'
							/>
						</div>
						<Select
							name='inputProvince'
							value={optionsProvince.find(option => option.value === inputProvince)}
							onChange={handleShippingSelectChange}
							options={optionsProvince}
							className={style.select}
							classNamePrefix='item-select'
							placeholder='region'
						/>
					</div>
					<Select
						name='inputCountry'
						value={countries.find(option => option.value === inputCountry)}
						onChange={handleShippingSelectChange}
						options={countries}
						className={style.select}
						classNamePrefix='item-select'
						placeholder='country'
					/>
				</div>
			</div>
			<NavigationOrder currentPage='details' fieldCheck={fieldCheck} />
			<Modal active={isOpen} message={message} />
		</div>
	)
}
