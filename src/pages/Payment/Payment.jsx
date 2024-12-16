import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { PaymentMethod } from '@/components/PaymentMethod/PaymentMethod.jsx'
import { RadioPayment } from '@/components/RadioPayment/RadioPayment.jsx'
import { InfoShipping } from '@/components/InfoShipping/InfoShipping.jsx'
import { TaxInfo } from '@/components/TaxInfo/TaxInfo.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useSelector } from 'react-redux'

export const Payment = () => {
	const { isOpen, message } = useSelector(state => state.modal)
	return (
		<div>
			<div className={shipping.shipping}>
				<div className={shipping.main}>
					<InfoShipping />
					<PaymentMethod />
					<TaxInfo />
					<RadioPayment />
				</div>
				<NavigationOrder currentPage='payment' />
				<Modal active={isOpen} message={message} />
			</div>
		</div>
	)
}
