import { Link, useNavigate } from 'react-router-dom'
import style from '@/layouts/Layouts.module.scss'
import { useDispatch } from 'react-redux'
import { actions } from '@/store/basket/basket.slice.js'

export const NavigationOrder = ({ currentPage, fieldCheck, setBasket, clearBasketIfConfirmed }) => {
	const navigate = useNavigate()

	const handleNextClick = event => {
		if (!fieldCheck(event)) return

		if (currentPage === 'details') {
			navigate('/order/shipping')
		} else if (currentPage === 'shipping') {
			navigate('/order/payment')
		} else if (currentPage === 'payment') {
			navigate('/order/confirmed')
		}
	}

	const handlePreviousClick = () => {
		if (currentPage === 'details') {
			navigate('/basket')
		} else if (currentPage === 'shipping') {
			navigate('/order/details')
		} else if (currentPage === 'payment') {
			navigate('/order/shipping')
		} else if (currentPage === 'confirmed') {
			navigate('/order/payment')
		}
	}

	// redux
	const dispatch = useDispatch()

	return (
		<div className={style.buttons}>
			{currentPage === 'confirmed' ? (
				<button type='button' className={style.back}>
					Print receipt
				</button>
			) : (
				<button className={style.back} onClick={handlePreviousClick}>
					{currentPage === 'details' && 'Back to basket'}
					{currentPage === 'shipping' && 'Back to details'}
					{currentPage === 'payment' && 'Back to shipping'}
					{/*{currentPage === 'confirmed' && 'Print receipt'}*/}
				</button>
			)}

			{currentPage === 'confirmed' ? (
				// <Link to='/products' className={style.button} onClick={clearBasketIfConfirmed}>
				<Link to='/products' className={style.button} onClick={dispatch(actions.clearBasket)}>
					Back to shopping
				</Link>
			) : (
				<button type='button' className={style.button} onClick={event => handleNextClick(event)}>
					{currentPage === 'details' && 'Go to shipping'}
					{currentPage === 'shipping' && 'Go to payment'}
					{currentPage === 'payment' && 'Pay now'}
					{/*{currentPage === 'confirmed' && 'Nice!'}*/}
				</button>
			)}
		</div>
	)
}
