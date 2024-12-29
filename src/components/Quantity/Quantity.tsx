import quantityStyles from '@components/Quantity/Quantity.module.scss'
import { useEffect, useState } from 'react'

export interface QuantityProps {
	initialCount: number
	onChange: (quantity: number) => void
}

export const Quantity = ({ initialCount, onChange }: QuantityProps) => {
	const [count, setCount] = useState(initialCount)

	// Синхронизируем состояние компонента при изменении initialCount
	useEffect(() => {
		setCount(initialCount)
	}, [initialCount])

	const handlePlus = () => {
		const newCount = count + 1
		setCount(newCount)
		onChange(newCount)
	}

	const handleMinus = () => {
		if (count > 1) {
			const newCount = count - 1
			setCount(newCount)
			onChange(newCount)
		}
	}

	return (
		<div className={quantityStyles.wrap}>
			<div className={quantityStyles.minus} onClick={handleMinus}>
				-
			</div>
			<div className={quantityStyles.value}>{count}</div>
			<div className={quantityStyles.plus} onClick={handlePlus}>
				+
			</div>
		</div>
	)
}
