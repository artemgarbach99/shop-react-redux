import style from '@/components/Cards/Cards.module.scss'
import { Card } from '@components/Card/Card'
import { useSelector } from 'react-redux'
import products from '@/pages/Products/Products.module.scss'
import { RootState } from '@/store/store'

export const CardsFavorites = () => {
	const favorites = useSelector((state: RootState) => state.favorites.favorites)
	return (
		<div className={style.content}>
			{favorites.length > 0 ? (
				<div>
					<div className={products.heading}>Favorites</div>
					<div className={style.list}>
						{favorites.map((obj, index) => (
							<Card key={index} title={obj.title} images={obj.images[0]} price={obj.price} id={obj.id} />
						))}
					</div>
				</div>
			) : (
				<div className={style['not-found']}>Favorites not found!</div>
			)}
		</div>
	)
}
