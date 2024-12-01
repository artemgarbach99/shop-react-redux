import { Navigation } from '@/components/Navigation/Navigation.jsx'
import style from '@components/Header/Header.module.scss'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const Header = ({ itemCount, clearBasketIfConfirmed }) => {
	return (
		<div className={style.header}>
			<div className='container'>
				<div className={style.body}>
					<div className={style.logo}>
						<Link to='/main' onClick={clearBasketIfConfirmed}>
							<img src='/src/assets/images/logo.svg' alt='Logo' />
						</Link>
					</div>
					<Navigation />
					<div className={style.buttons}>
						<Link to='/basket' className={style.basket} data-item-count={itemCount}>
							<AiOutlineShoppingCart size={30} />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
