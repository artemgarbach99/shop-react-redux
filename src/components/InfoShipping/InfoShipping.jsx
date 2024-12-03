import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useSelector } from 'react-redux'

export const InfoShipping = ({ shippingInputValues, selectedOptionLabel, selectedOptionValue }) => {
	// shippingInputsSlice
	const shippingInputContacts = useSelector(state => state.shippingInputs.inputContacts)
	const shippingInputAddress = useSelector(state => state.shippingInputs.inputAddress)
	const shippingInputCity = useSelector(state => state.shippingInputs.inputCity)
	const shippingInputCode = useSelector(state => state.shippingInputs.inputCode)
	const shippingInputProvince = useSelector(state => state.shippingInputs.inputProvince)
	const shippingInputCountry = useSelector(state => state.shippingInputs.inputCountry)

	return (
		<div className={shipping.block}>
			<div className={shipping.item}>
				<div className={shipping.label}>Contact</div>
				<div className={shipping.value}>
					{shippingInputContacts}
					{/*{shippingInputValues.inputContacts}*/}
				</div>
			</div>
			<div className={shipping.item}>
				<div className={shipping.label}>Ship to</div>
				<div className={shipping.value}>
					<span>
						{shippingInputAddress},{/*{shippingInputValues.inputAddress}*/}
					</span>
					<span>
						{shippingInputCity},{/*{shippingInputValues.inputCity},*/}
					</span>
					<span>
						{shippingInputCode},{/*{shippingInputValues.inputCode},*/}
					</span>
					<span>
						{shippingInputProvince},
						{/*{shippingInputValues.inputProvince ? shippingInputValues.inputProvince.label : ''},*/}
					</span>
					<span>
						{shippingInputCountry}
						{/*{shippingInputValues.inputCountry ? shippingInputValues.inputCountry.label : ''}*/}
					</span>
				</div>
			</div>
			{selectedOptionLabel && (
				<div className={shipping.item}>
					<div className={shipping.label}>Method</div>
					<div className={shipping.value}>
						<span>{selectedOptionLabel}</span>
						<span className={shipping['option-value']}>{selectedOptionValue}</span>
					</div>
				</div>
			)}
		</div>
	)
}
