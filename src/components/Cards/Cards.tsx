import style from './Cards.module.scss'
import productsStyle from '@pages/Products/Products.module.scss'
import { Card } from '@components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Select, { ActionMeta, components, MultiValue, OptionProps, SingleValue, SingleValueProps } from 'react-select'
import { fetchProducts } from '@/store/products/products.actions'
import { FaRegStar, FaSortAlphaDown, FaSortAlphaDownAlt, FaSortAmountDown, FaSortAmountDownAlt } from 'react-icons/fa'
import { AppDispatch, RootState } from '@/store/store'
import { IProduct } from '@/types/produts.types'

export interface IOption {
	value: (() => void) | ((a: IProduct, b: IProduct) => number)
	label: string
	icon?: React.ReactNode
}

export const Cards = () => {
	const { products, loading, error } = useSelector((state: RootState) => state.products)
	const [sortedProducts, setSortedProducts] = useState(products)
	const dispatch: AppDispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	useEffect(() => {
		setSortedProducts(products)
	}, [products])

	const customOption = (props: OptionProps<IOption>) => {
		return (
			<components.Option {...props}>
				{props.data.icon && <span style={{ marginRight: 8 }}>{props.data.icon}</span>} {props.data.label}
			</components.Option>
		)
	}

	const customSingleValue = (props: SingleValueProps<IOption>) => {
		return (
			<components.SingleValue {...props}>
				{props.data.icon && <span style={{ marginRight: 8 }}>{props.data.icon}</span>} {props.data.label}
			</components.SingleValue>
		)
	}

	const options: IOption[] = [
		{ value: () => setSortedProducts(products), label: 'Sort by popular', icon: <FaRegStar /> },
		{
			value: (a: IProduct, b: IProduct) => a.title.localeCompare(b.title),
			label: 'Sort by Name Ascending',
			icon: <FaSortAlphaDown />
		},
		{
			value: (a: IProduct, b: IProduct) => b.title.localeCompare(a.title),
			label: 'Sort by Name Descending',
			icon: <FaSortAlphaDownAlt />
		},
		{
			value: (a: IProduct, b: IProduct) => a.price - b.price,
			label: 'Sort by Price Ascending',
			icon: <FaSortAmountDownAlt />
		},
		{
			value: (a: IProduct, b: IProduct) => b.price - a.price,
			label: 'Sort by Price Descending',
			icon: <FaSortAmountDown />
		}
	]

	// const handleChange = (selectedOption: IOption & { value: (a: IProduct, b: IProduct) => number }) => {
	// 	const sorted = selectedOption && [...products].sort(selectedOption.value)
	// 	setSortedProducts(sorted)
	// }

	const handleChange = (newValue: SingleValue<IOption> | MultiValue<IOption>, actionMeta: ActionMeta<IOption>) => {
		const selectedOption = newValue as SingleValue<IOption>
		if (selectedOption && 'value' in selectedOption) {
			const sortingFunction = selectedOption.value as (a: IProduct, b: IProduct) => number
			const sorted = [...products].sort(sortingFunction)
			setSortedProducts(sorted)
		} else {
			console.log('No sorting option selected.')
		}
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
