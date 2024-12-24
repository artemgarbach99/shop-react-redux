import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useSelector } from 'react-redux'
import { useDetails } from '@/hooks/useDetails'

export const InfoShipping = () => {
	const { inputContacts, inputAddress, inputCity, inputCode, inputProvince, inputCountry } = useDetails()
	const { dataValue, dataLabel } = useSelector(state => state.shippingInputs)

	return (
		<div className={shipping.block}>
			<div className={shipping.item}>
				<div className={shipping.label}>Contact</div>
				<div className={shipping.value}>{inputContacts}</div>
			</div>
			<div className={shipping.item}>
				<div className={shipping.label}>Ship to</div>
				<div className={shipping.value}>
					<span>{inputAddress},</span>
					<span>{inputCity},</span>
					<span>{inputCode},</span>
					<span>{inputProvince},</span>
					<span>{inputCountry}</span>
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
