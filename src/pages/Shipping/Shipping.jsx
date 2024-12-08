import { NavigationOrder } from '@/components/NavigationOrder/NavigationOrder.jsx'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { RadioShipping } from '@/components/RadioShipping/RadioShipping.jsx'
import { InfoShipping } from '@/components/InfoShipping/InfoShipping.jsx'
import { Modal } from '@/components/Modal/Modal.jsx'
import { useSelector } from 'react-redux'

export const Shipping = ({
	// shippingInputValues,
	// selectedOption,
	// handleOptionChange,
	fieldCheck
	// modalActive,
	// modalMessage
}) => {
	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const modalReduxMessage = useSelector(state => state.modal.message)
	return (
		<div className={shipping.shipping}>
			<div className={shipping.main}>
				<InfoShipping />
				<RadioShipping
				// selectedOption={selectedOption}
				// handleOptionChange={handleOptionChange}
				/>
			</div>
			<NavigationOrder currentPage='shipping' fieldCheck={fieldCheck} />
			{/*<Modal active={modalActive} message={modalMessage} />*/}
			<Modal active={modalReduxActive} message={modalReduxMessage} />
		</div>
	)
}
