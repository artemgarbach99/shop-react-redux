import style from '@/components/Cards/Cards.module.scss'
import { Card } from '@/components/Card/Card.jsx'
import { useSelector } from 'react-redux'
import products from '@/pages/Products/Products.module.scss'

export const CardsFavorites = () => {
	const favorites = useSelector(state => state.favorites.favorites)
	return (
		<div className={style.content}>
			{favorites.length > 0 ? (
				<div>
					<div className={products.heading}>Favorites</div>
					<div className={style.list}>
						{favorites.map((obj, index) => (
							<Card key={index} title={obj.title} image={obj.image} price={obj.price} id={obj.id} />
						))}
					</div>
				</div>
			) : (
				<div className={style['not-found']}>Favorites not found!</div>
			)}
		</div>
	)
}
