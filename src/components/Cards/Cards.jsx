import style from './Cards.module.scss'
import { Card } from '@/components/Card/Card.jsx'
import { useSelector } from 'react-redux'

export const Cards = () => {
	const { products, loading, error } = useSelector(state => state.products)
	return (
		<div className={style.list}>
			{products.map((obj, index) => (
				<Card key={index} title={obj.title} image={obj.image} price={obj.price} id={obj.id} />
			))}
		</div>
	)
}
