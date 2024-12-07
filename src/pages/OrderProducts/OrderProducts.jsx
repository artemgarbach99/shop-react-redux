import order from '@/pages/OrderProducts/OrderProducts.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Skeleton } from '@/components/Skeleton/Skeleton.jsx'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const OrderProducts = ({ basket, subtotal, isLoading, selectedOptionValue }) => {
	const navigate = useNavigate()

	const { loading } = useSelector(state => state.products)

	const basketRedux = useSelector(state => state.basket.basket)
	const totalPriceRedux = useSelector(state => state.basket.totalPrice)

	const calculateTotalPrice = item => {
		return (item.price * item.quantity).toFixed(2)
	}

	const TotalPriceWithShipping = () => {
		const additionalCost = parseFloat(selectedOptionValue.replace('$', ''))
		// const subtotalNumber = parseFloat(subtotal)
		const subtotalNumber = parseFloat(totalPriceRedux)

		if (isNaN(additionalCost)) {
			return subtotalNumber.toFixed(2)
		}
		return (subtotalNumber + additionalCost).toFixed(2)
	}

	useEffect(() => {
		if (basketRedux.length === 0) {
			navigate('/basket')
		}
	}, [basketRedux, navigate])

	return (
		<div className={order.body}>
			{basketRedux.length > 0 && (
				<div className={order.wrap}>
					<div className={order.cards}>
						{basketRedux.map(item => (
							<div key={item.id} className={order.card}>
								<div className={order.image}>
									{loading ? <Skeleton /> : <img src={item.image} alt='' />}
									<span className={order.quantity}>{item.quantity}</span>
								</div>
								<div className={order.content}>
									<Link to={`/card/${item.id}`} className={order.title}>
										{item.title}
									</Link>
									<div className={order.price}>$ {calculateTotalPrice(item)}</div>
								</div>
							</div>
						))}
					</div>
					<div className={order.info}>
						<div className={order.line}>
							<div className={order.row}>
								<div className={order.label}>total:</div>
								{/*<div className={order.price}>{subtotal}</div>*/}
								<div className={order.price}>{totalPriceRedux.toFixed(2)}</div>
							</div>
							<div className={order.row}>
								<div className={order.label}>Shipping:</div>
								<div className={order.description}>
									{selectedOptionValue ? selectedOptionValue : 'Calculated at the next step'}
								</div>
							</div>
						</div>
						<div className={order.line}>
							<div className={order.row}>
								<div className={order.label}>subtotal:</div>
								<div className={order.price}>${TotalPriceWithShipping()}</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
