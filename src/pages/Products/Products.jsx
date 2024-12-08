import { Cards } from '@/components/Cards/Cards.jsx'
import style from './Products.module.scss'

export const Products = () => {
	return (
		<div className={style.products}>
			<div className='container'>
				<div className={style.body}>
					<div className={style.heading}>Products</div>
					<div className={style.subtitle}>Order it for you or for your beloved ones</div>
					<Cards />
				</div>
			</div>
		</div>
	)
}
