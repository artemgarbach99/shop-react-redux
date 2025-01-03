import { NavigationOrder } from '@components/NavigationOrder/NavigationOrder'
import { GiConfirmed } from 'react-icons/gi'
import style from '@pages/Confirmed/Confirmed.module.scss'
import { useDetails } from '@/hooks/useDetails'

export const Confirmed = () => {
	const { inputName, inputSecondName } = useDetails()

	return (
		<div className={style.confirmed}>
			<div className={style.top}>
				<GiConfirmed size={100} color={'#56b280'} />
				<div className={style.title}>Payment Confirmed</div>
				<div className={style.order}>ORDER #2039</div>
			</div>
			<div className={style.text}>
				Thank you
				<span className={style.name}>{inputName}</span>
				for buying Candleaf. The nature is grateful to you. Now that your order is confirmed it will be ready to ship in
				2 days. Please check your inbox in the future for your order updates.
			</div>
			<NavigationOrder currentPage='confirmed' />
		</div>
	)
}
