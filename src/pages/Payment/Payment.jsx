import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { PaymentMethod } from '@/components/PaymentMethod/PaymentMethod.jsx'
import { RadioPayment } from '@/components/RadioPayment/RadioPayment.jsx'
import { InfoShipping } from '@/components/InfoShipping/InfoShipping.jsx'
import { TaxInfo } from '@/components/TaxInfo/TaxInfo.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useSelector } from 'react-redux'

export const Payment = ({
	// shippingInputValues,
	// selectedOptionValue,
	// selectedOptionLabel,
	fieldCheck
	// modalActive,
	// modalMessage
}) => {
	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const modalReduxMessage = useSelector(state => state.modal.message)
	return (
		<div>
			<div className={shipping.shipping}>
				<div className={shipping.main}>
					<InfoShipping
					// shippingInputValues={shippingInputValues}
					// selectedOptionValue={selectedOptionValue}
					// selectedOptionLabel={selectedOptionLabel}
					/>
					<PaymentMethod />
					<TaxInfo />
					<RadioPayment />
				</div>
				<NavigationOrder currentPage='payment' fieldCheck={fieldCheck} />
				{/*<Modal active={modalActive} message={modalMessage} />*/}
				<Modal active={modalReduxActive} message={modalReduxMessage} />
			</div>
		</div>
	)
}
