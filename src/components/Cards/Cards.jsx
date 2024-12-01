import style from './Cards.module.scss'
import { Card } from '@/components/Card/Card.jsx'

export const Cards = ({ cards, isLoading }) => {
	return (
		<div className={style.list}>
			{cards.map((obj, index) => (
				<Card key={index} title={obj.title} image={obj.image} price={obj.price} id={obj.id} isLoading={isLoading} />
			))}
		</div>
	)
}
