import shipping from '@/pages/Shipping/Shipping.module.scss'

export const InfoShipping = ({ shippingInputValues, selectedOptionLabel, selectedOptionValue }) => {
	return (
		<div className={shipping.block}>
			<div className={shipping.item}>
				<div className={shipping.label}>Contact</div>
				<div className={shipping.value}>{shippingInputValues.inputContacts}</div>
			</div>
			<div className={shipping.item}>
				<div className={shipping.label}>Ship to</div>
				<div className={shipping.value}>
					<span>{shippingInputValues.inputAddress},</span>
					<span>{shippingInputValues.inputCity},</span>
					<span>{shippingInputValues.inputCode},</span>
					<span>{shippingInputValues.inputProvince ? shippingInputValues.inputProvince.label : ''},</span>
					<span>{shippingInputValues.inputCountry ? shippingInputValues.inputCountry.label : ''}</span>
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
