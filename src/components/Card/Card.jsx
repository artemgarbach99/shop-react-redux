import style from '@components/Card/Card.module.scss'
import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/Skeleton/Skeleton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { modalActions } from '@/store/modal/modal.slice.js'
import { favoritesActions } from '@/store/favorites/favorites.slice.js'
// import global from '@assets/styles/global.scss'

export const Card = ({ title, image, price, id }) => {
	const dispatch = useDispatch()
	const { products, loading, error } = useSelector(state => state.products)

	const favorites = useSelector(state => state.favorites.favorites)

	const product = products.find(prod => prod.id === parseInt(id))
	const isInFavorite = favorites.some(card => card.id === product.id)

	// const colorGreen = global.colorGreen

	const handleAddToFavorites = () => {
		if (isInFavorite) {
			dispatch(favoritesActions.removeFromFavorite(product))
			dispatch(modalActions.modalActive('Product delete!'))
		} else {
			dispatch(favoritesActions.addToFavorite(product))
			dispatch(modalActions.modalActive('Product added!'))
		}
	}

	return (
		<div className={style.card}>
			<div className={style.wrap}>
				<Link to={`/card/${id}`} className={style.image}>
					{loading ? (
						<div className='loader-svg-wrap'>
							<Skeleton />
						</div>
					) : (
						<img src={image} alt='' />
					)}
				</Link>
				<div className={style.block}>
					<Link to={`/card/${id}`} className={style.title}>
						{title}
					</Link>
					<div className={style.row}>
						<button onClick={handleAddToFavorites}>
							{isInFavorite ? <MdFavorite size={24} color={'#56b280'} /> : <MdFavoriteBorder size={24} />}
						</button>
						<div className={style.price}>{price}$</div>
					</div>
				</div>
			</div>
		</div>
	)
}
