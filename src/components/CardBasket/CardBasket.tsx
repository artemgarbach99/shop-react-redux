import itemStyles from '@/components/CardBasket/CardBasket.module.scss'
import style from '@/pages/Basket/Basket.module.scss'
import { Link } from 'react-router-dom'
import { Quantity } from '@components/Quantity/Quantity'
import { Skeleton } from '@components/Skeleton/Skeleton'
import '@/assets/styles/_global.scss'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '@/store/basket/basket.slice'
import { IProduct } from '@/types/produts.types'
import { AppDispatch, RootState } from '@/store/store'

export const CardBasket = ({ id, title, image, price, quantity }: IProduct) => {
	const dispatch: AppDispatch = useDispatch()

	const { loading } = useSelector((state: RootState) => state.products)

	const updateQuantity = (id: number, quantity: number) => {
		dispatch(actions.UpdateQuantity({ id, quantity }))
	}

	// обновление количества
	const handleQuantityChange = (newQuantity: number) => {
		updateQuantity(id, newQuantity)
	}

	const totalPrice = (price * quantity).toFixed(2)

	return (
		<li className={itemStyles.item}>
			<div className={style.section}>
				<div className={itemStyles.content}>
					<div className={itemStyles.image}>
						{loading ? (
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
