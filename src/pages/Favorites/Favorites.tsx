import style from '@/pages/Products/Products.module.scss'
import { CardsFavorites } from '@components/CardsFavorites/CardsFavorites'
import { useSelector } from 'react-redux'
import { Modal } from '@components/Modal/Modal'
import { RootState } from '@/store/store'

export const Favorites = () => {
	const { isOpen, message } = useSelector((state: RootState) => state.modal)
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
