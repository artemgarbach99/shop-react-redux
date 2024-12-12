import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useSelector } from 'react-redux'
import { useDetails } from '@/hooks/useDetails.js'

export const InfoShipping = () => {
	// detailsInputsSlice
	const { inputContacts, inputAddress, inputCity, inputCode, inputProvince, inputCountry } = useDetails()
	const { dataValue, dataLabel } = useSelector(state => state.shippingInputs)
	// const detailsInputContacts = useSelector(state => state.detailsInputs.inputContacts)
	// const detailsInputsAddress = useSelector(state => state.detailsInputs.inputAddress)
	// const detailsInputsCity = useSelector(state => state.detailsInputs.inputCity)
	// const detailsInputsCode = useSelector(state => state.detailsInputs.inputCode)
	// const detailsInputsProvince = useSelector(state => state.detailsInputs.inputProvince)
	// const detailsInputsCountry = useSelector(state => state.detailsInputs.inputCountry)
	// shippingInputsSlice
	// const dataValue = useSelector(state => state.shippingInputs.dataValue)
	// const dataLabel = useSelector(state => state.shippingInputs.dataLabel)

	return (
		<div className={shipping.block}>
			<div className={shipping.item}>
				<div className={shipping.label}>Contact</div>
				<div className={shipping.value}>
					{inputContacts}
					{/*{shippingInputValues.inputContacts}*/}
				</div>
			</div>
			<div className={shipping.item}>
				<div className={shipping.label}>Ship to</div>
				<div className={shipping.value}>
					<span>
						{inputAddress},{/*{shippingInputValues.inputAddress}*/}
					</span>
					<span>
						{inputCity},{/*{shippingInputValues.inputCity},*/}
					</span>
					<span>
						{inputCode},{/*{shippingInputValues.inputCode},*/}
					</span>
					<span>
						{inputProvince},{/*{shippingInputValues.inputProvince ? shippingInputValues.inputProvince.label : ''},*/}
					</span>
					<span>
						{inputCountry}
						{/*{shippingInputValues.inputCountry ? shippingInputValues.inputCountry.label : ''}*/}
					</span>
				</div>
			</div>
			{dataLabel && (
				<div className={shipping.item}>
					<div className={shipping.label}>Method</div>
					<div className={shipping.value}>
						<span>{dataLabel}</span>
						<span className={shipping['option-value']}>{dataValue}</span>
					</div>
				</div>
			)}
		</div>
	)
}
