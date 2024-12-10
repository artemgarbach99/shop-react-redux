import style from '@/pages/Products/Products.module.scss'
import { CardsFavorites } from '@/components/CardsFavorites/CardsFavorites.jsx'

export const Favorites = () => {
	return (
		<div className={style.products}>
			<div className='container'>
				<div className={style.body}>
					<CardsFavorites />
				</div>
			</div>
		</div>
	)
}
