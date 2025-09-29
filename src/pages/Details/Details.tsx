import style from '@/pages/Details/Details.module.scss'
import Select, { ActionMeta, SingleValue } from 'react-select'
import '@/pages/Details/select.scss'
import { NavigationOrder } from '@components/NavigationOrder/NavigationOrder'
import { Modal } from '@components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { detailsInputsActions } from '@/store/detailsInputs/detailsInputs.slice'
import { useDetails } from '@/hooks/useDetails'
import { ChangeEvent, useEffect } from 'react'
import { fetchDetailsCountries } from '@/store/detailsInputs/detailsInputs.actions'
import { AppDispatch, RootState } from '@/store/store'
import { SlBasket } from 'react-icons/sl'
import { useOutletContext } from 'react-router-dom'
import { ContextType } from '@/types/order.types'
import { MobileOrder } from '@/components/MobileOrder/MobileOrder'

interface IProvince {
	value: string
	label: string
}

export const Details = () => {
	const dispatch: AppDispatch = useDispatch()
	// const { showOrder, setShowOrder } = useOutletContext<ContextType>()

	useEffect(() => {
		dispatch(fetchDetailsCountries())
	}, [dispatch])

	const optionsProvince: IProvince[] = [
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
	const { countries, loading, error } = useSelector((state: RootState) => state.detailsInputs)
	const { isOpen, message } = useSelector((state: RootState) => state.modal)

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

	const handleShippingInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		dispatch(detailsInputsActions.setInputValue({ name, value }))
	}

	// const selectedOptionProvince: any = optionsProvince.find((option: IProvince) => option.value === inputProvince)
	// const selectedOptionCountries: any = countries.find(option => option.value === inputCountry)

	const handleShippingSelectChange = (selectedOption: SingleValue<IProvince>, actionMeta: ActionMeta<IProvince>) => {
		const { name } = actionMeta
		const value = selectedOption?.value ?? ''
		if (name) {
			dispatch(detailsInputsActions.setValueSelect({ name, value }))
		}
	}

	return (
		<div className={style.details}>
			{/* <button type='button' className={style.show} onClick={() => setShowOrder(true)}>
				<SlBasket size={24} />
				See your order details
			</button> */}
			<MobileOrder />
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
							// value={optionsProvince.find(option => option.value === inputProvince)}
							value={optionsProvince.find(option => option.value === inputProvince) ?? undefined}
							onChange={handleShippingSelectChange}
							options={optionsProvince}
							className={style.select}
							classNamePrefix='item-select'
							placeholder='region'
							getOptionLabel={(option: IProvince) => option.label}
							getOptionValue={(option: IProvince) => option.value}
						/>
					</div>
					<Select
						name='inputCountry'
						value={countries.find(option => option.value === inputCountry) ?? undefined}
						onChange={handleShippingSelectChange}
						options={countries}
						className={style.select}
						classNamePrefix='item-select'
						placeholder='country'
						getOptionLabel={(option: IProvince) => option.label}
						getOptionValue={(option: IProvince) => option.value}
					/>
				</div>
			</div>
			<NavigationOrder currentPage='details' />
			<Modal active={isOpen} message={message} />
		</div>
	)
}
