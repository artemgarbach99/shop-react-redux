import style from '@/pages/Basket/Basket.module.scss'
import itemStyles from '@/components/CardBasket/CardBasket.module.scss'
import { Link } from 'react-router-dom'
import { CardBasket } from '@/components/CardBasket/CardBasket.jsx'
import { useSelector } from 'react-redux'

export const Basket = () => {
	const { basket, totalPrice } = useSelector(state => state.basket)

	return (
		<div className={style.basket}>
			<div className='container'>
				<div className={style.body}>
					<div className={style.heading}>
						<h2>Your cart items</h2>
						<Link to='/products' className={style.link}>
							Back to shopping
						</Link>
					</div>
					{basket.length === 0 ? (
						<div className={style.void}>
							<p>Shopping cart is empty!</p>
						</div>
					) : (
						<div className={style.main}>
							<ul className={style.sections}>
								<li className={style.section}>
									<span className={style.label}>Product</span>
								</li>
								<li className={style.section}>
									<span className={style.label}>Price</span>
								</li>
								<li className={style.section}>
									<span className={style.label}>Quantity</span>
								</li>
								<li className={style.section}>
									<span className={style.label}>Total</span>
								</li>
							</ul>
							<ul className={style.list}>
								{basket.map((item, index) => (
									<CardBasket key={index} {...item} />
								))}
							</ul>
							<div className={style.check}>
								<div className={style.line}>
									<h3 className={style.label}>Sub-total:</h3>
									<div className={itemStyles.price}>${totalPrice.toFixed(2)}</div>
								</div>
								<Link to='/order' className={style.button}>
									Check-out
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
