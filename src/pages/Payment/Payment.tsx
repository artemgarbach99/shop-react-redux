import { NavigationOrder } from '@components/NavigationOrder/NavigationOrder'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { PaymentMethod } from '@components/PaymentMethod/PaymentMethod'
import { RadioPayment } from '@components/RadioPayment/RadioPayment'
import { InfoShipping } from '@components/InfoShipping/InfoShipping'
import { TaxInfo } from '@components/TaxInfo/TaxInfo'
import { Modal } from '@components/Modal/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { MobileOrder } from '@/components/MobileOrder/MobileOrder'

export const Payment = () => {
	const { isOpen, message } = useSelector((state: RootState) => state.modal)
	return (
		<div className={shipping.shipping}>
			<div className={shipping.main}>
				<MobileOrder />
				<InfoShipping />
				<PaymentMethod />
				<TaxInfo />
				<RadioPayment />
			</div>
			<NavigationOrder currentPage='payment' />
			<Modal active={isOpen} message={message} />
		</div>
	)
}
