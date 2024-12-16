import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { RadioShipping } from '@/components/RadioShipping/RadioShipping.jsx'
import { InfoShipping } from '@/components/InfoShipping/InfoShipping.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useSelector } from 'react-redux'

export const Shipping = () => {
	const { isOpen, message } = useSelector(state => state.modal)
	return (
		<div className={shipping.shipping}>
			<div className={shipping.main}>
				<InfoShipping />
				<RadioShipping />
			</div>
			<NavigationOrder currentPage='shipping' />
			<Modal active={isOpen} message={message} />
		</div>
	)
}
