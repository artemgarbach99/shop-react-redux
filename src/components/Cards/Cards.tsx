import style from './Cards.module.scss'
import productsStyle from '@pages/Products/Products.module.scss'
import { Card } from '@/components/Card/Card.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import { fetchProducts } from '@/store/products/products.actions'
import { FaRegStar, FaSortAlphaDown, FaSortAlphaDownAlt, FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa'
import { RootState } from '@/store/store'

export const Cards = () => {
	const { products, loading, error } = useSelector((state: RootState) => state.products)
	const [sortedProducts, setSortedProducts] = useState(products)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	useEffect(() => {
		setSortedProducts(products)
	}, [products])

	const customOption = props => {
		return (
			<components.Option {...props}>
				{props.data.icon && <span style={{ marginRight: 8 }}>{props.data.icon}</span>} {props.data.label}
			</components.Option>
		)
	}

	const customSingleValue = props => {
		return (
			<components.SingleValue {...props}>
				{props.data.icon && <span style={{ marginRight: 8 }}>{props.data.icon}</span>} {props.data.label}
			</components.SingleValue>
		)
	}

	const options = [
		{ value: () => setSortedProducts(products), label: 'Sort by popular', icon: <FaRegStar /> },
		{ value: (a, b) => a.title.localeCompare(b.title), label: 'Sort by Name Ascending', icon: <FaSortAlphaDown /> },
		{ value: (a, b) => b.title.localeCompare(a.title), label: 'Sort by Name Descending', icon: <FaSortAlphaDownAlt /> },
		{ value: (a, b) => a.price - b.price, label: 'Sort by Price Ascending', icon: <FaSortAmountDownAlt /> },
		{ value: (a, b) => b.price - a.price, label: 'Sort by Price Descending', icon: <FaSortAmountDown /> }
	]

	const handleChange = selectedOption => {
		const sorted = [...products].sort(selectedOption.value)
		setSortedProducts(sorted)
	}

	return (
		<div>
			<div className={productsStyle.sort}>
				<Select
					options={options}
					onChange={handleChange}
					components={{ Option: customOption, SingleValue: customSingleValue }}
					className={style.select}
					classNamePrefix='item-select'
					placeholder='Select sorting option'
				/>
			</div>
			<div className={style.list}>
				{sortedProducts.map((obj, index) => (
					<Card key={index} title={obj.title} image={obj.image} price={obj.price} id={obj.id} />
				))}
			</div>
		</div>
	)
}
