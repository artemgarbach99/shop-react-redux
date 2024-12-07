import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useSelector } from 'react-redux'

export const InfoShipping = ({ shippingInputValues, selectedOptionLabel, selectedOptionValue }) => {
	// shippingInputsSlice
	const detailsInputContacts = useSelector(state => state.detailsInputs.inputContacts)
	const detailsInputsAddress = useSelector(state => state.detailsInputs.inputAddress)
	const detailsInputsCity = useSelector(state => state.detailsInputs.inputCity)
	const detailsInputsCode = useSelector(state => state.detailsInputs.inputCode)
	const detailsInputsProvince = useSelector(state => state.detailsInputs.inputProvince)
	const detailsInputsCountry = useSelector(state => state.detailsInputs.inputCountry)

	return (
		<div className={shipping.block}>
			<div className={shipping.item}>
				<div className={shipping.label}>Contact</div>
				<div className={shipping.value}>
					{detailsInputContacts}
					{/*{shippingInputValues.inputContacts}*/}
				</div>
			</div>
			<div className={shipping.item}>
				<div className={shipping.label}>Ship to</div>
				<div className={shipping.value}>
					<span>
						{detailsInputsAddress},{/*{shippingInputValues.inputAddress}*/}
					</span>
					<span>
						{detailsInputsCity},{/*{shippingInputValues.inputCity},*/}
					</span>
					<span>
						{detailsInputsCode},{/*{shippingInputValues.inputCode},*/}
					</span>
					<span>
						{detailsInputsProvince},
						{/*{shippingInputValues.inputProvince ? shippingInputValues.inputProvince.label : ''},*/}
					</span>
					<span>
						{detailsInputsCountry}
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
