import { Cards } from '@components/Cards/Cards'
import style from './Products.module.scss'
import { useSelector } from 'react-redux'
import { Modal } from '@components/Modal/Modal'

export const Products = () => {
	const { isOpen, message } = useSelector(state => state.modal)
	return (
		<div className={style.products}>
			<div className='container'>
				<div className={style.body}>
					<div className={style.heading}>Products</div>
					<div className={style.subtitle}>Order it for you or for your beloved ones</div>
					<Cards />
				</div>
			</div>
			<Modal active={isOpen} message={message} />
		</div>
	)
}
