import style from '@/pages/Products/Products.module.scss'
import { CardsFavorites } from '@components/CardsFavorites/CardsFavorites'
import { useSelector } from 'react-redux'
import { Modal } from '@components/Modal/Modal'

export const Favorites = () => {
	const { isOpen, message } = useSelector(state => state.modal)
	return (
		<div className={style.products}>
			<div className='container'>
				<div className={style.body}>
					<CardsFavorites />
				</div>
			</div>
			<Modal active={isOpen} message={message} />
		</div>
	)
}
