import { NavigationOrder } from '@components/NavigationOrder/NavigationOrder'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { RadioShipping } from '@components/RadioShipping/RadioShipping'
import { InfoShipping } from '@components/InfoShipping/InfoShipping'
import { Modal } from '@components/Modal/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const Shipping = () => {
	const { isOpen, message } = useSelector((state: RootState) => state.modal)
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
