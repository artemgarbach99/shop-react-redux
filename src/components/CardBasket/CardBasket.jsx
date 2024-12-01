import itemStyles from '@/components/CardBasket/CardBasket.module.scss'
import style from '@/pages/Basket/Basket.module.scss'
import { Link } from 'react-router-dom'
import { Quantity } from '@/components/Quantity/Quantity.jsx'
import { Skeleton } from '@/components/Skeleton/Skeleton.jsx'
import '@assets/styles/global.scss'
import { useDispatch } from 'react-redux'
import { actions } from '@/store/basket/basket.slice.js'

export const CardBasket = ({
	id,
	title,
	image,
	price,
	quantity,
	removeFromBasket,
	// updateTotalPrice,
	updateQuantity,
	isLoading
}) => {
	// redux
	const dispatch = useDispatch()

	// useEffect(() => {
	// 	const totalPrice = price * quantity
	// 	updateTotalPrice(id, totalPrice)
	// }, [quantity, price, id])

	// обновление количества
	const handleQuantityChange = newQuantity => {
		updateQuantity(id, newQuantity)
		// updateTotalPrice(id, price * newQuantity)
	}

	const totalPrice = (price * quantity).toFixed(2)

	return (
		<li className={itemStyles.item}>
			<div className={style.section}>
				<div className={itemStyles.content}>
					<div className={itemStyles.image}>
						{isLoading ? (
							<div className='loader-svg-wrap'>
								<Skeleton />
							</div>
						) : (
							<img src={image} alt={title} />
						)}
					</div>
					<div className={itemStyles.name}>
						<Link to={`/card/${id}`}>
							<div className={itemStyles.title}>{title}</div>
						</Link>
						<button
							className={itemStyles.link}
							onClick={() => dispatch(actions.RemoveFromBasket({ id, price, quantity }))}>
							Remove
						</button>
						{/*<button className={itemStyles.link} onClick={() => removeFromBasket(id)}>*/}
						{/*	Remove*/}
						{/*</button>*/}
					</div>
				</div>
			</div>
			<div className={style.section}>
				<div className={itemStyles.price}>$ {price}</div>
			</div>
			<div className={style.section}>
				<Quantity initialCount={quantity} onChange={handleQuantityChange} />
			</div>
			<div className={style.section}>
				<div className={itemStyles.price}>$ {totalPrice}</div>
			</div>
		</li>
	)
}