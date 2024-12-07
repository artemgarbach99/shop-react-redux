import style from '@components/Card/Card.module.scss'

import { Link } from 'react-router-dom'
import { Skeleton } from '@/components/Skeleton/Skeleton.jsx'
import { useSelector } from 'react-redux'

export const Card = ({ title, image, price, id, isLoading }) => {
	const { loading } = useSelector(state => state.products)
	return (
		<div className={style.card}>
			<Link to={`/card/${id}`} className={style.wrap}>
				<div className={style.image}>
					{loading ? (
						<div className='loader-svg-wrap'>
							<Skeleton />
						</div>
					) : (
						<img src={image} alt='' />
					)}
				</div>
				<div className={style.block}>
					<div className={style.title}>{title}</div>
					<div className={style.price}>{price}$</div>
				</div>
			</Link>
		</div>
	)
}
