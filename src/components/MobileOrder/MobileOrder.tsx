import { ContextType } from '@/types/order.types'
import { useOutletContext } from 'react-router-dom'
import styles from '@components/MobileOrder/MobileOrder.module.scss'
import { FaArrowRight } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const MobileOrder = () => {
	const { showOrder, setShowOrder } = useOutletContext<ContextType>()
	const { totalPrice } = useSelector((state: RootState) => state.basket)
	return (
		<div className={styles.top}>
			<button type='button' className={styles.show} onClick={() => setShowOrder(true)}>
				See your order details
				<FaArrowRight size={14} />
			</button>
			<div className={styles.total_price}>${totalPrice}</div>
		</div>
	)
}
