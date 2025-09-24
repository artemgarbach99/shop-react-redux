import order from '@/pages/OrderProducts/OrderProducts.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { Skeleton } from '@components/Skeleton/Skeleton'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IProduct } from '@/types/produts.types'

export const OrderProducts = () => {
	const navigate = useNavigate()

	const { loading } = useSelector((state: RootState) => state.products)
	const { basket, totalPrice } = useSelector((state: RootState) => state.basket)
	// const totalPriceRedux = useSelector(state => state.basket.totalPrice)
	const dataValue = useSelector((state: RootState) => state.shippingInputs.dataValue)

	const calculateTotalPrice = (item: IProduct) => {
		return (item.price * item.quantity).toFixed(2)
	}

	const TotalPriceWithShipping = () => {
		const additionalCost = parseFloat(dataValue.replace('$', ''))
		const subtotalNumber = totalPrice

		if (isNaN(additionalCost)) {
			return subtotalNumber.toFixed(2)
		}
		return (subtotalNumber + additionalCost).toFixed(2)
	}

	useEffect(() => {
		if (basket.length === 0) {
			navigate('/basket')
		}
	}, [basket, navigate])

	return (
		<div className={order.body}>
			{basket.length > 0 && (
				<div className={order.wrap}>
					<div className={order.cards}>
						{basket.map(item => (
							<div key={item.id} className={order.card}>
								<div className={order.image}>
									{loading ? <Skeleton /> : <img src={item.images[0]} alt='' />}
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
								<div className={order.price}>{totalPrice.toFixed(2)}</div>
							</div>
							<div className={order.row}>
								<div className={order.label}>Shipping:</div>
								<div className={order.description}>{dataValue ? dataValue : 'Calculated at the next step'}</div>
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
