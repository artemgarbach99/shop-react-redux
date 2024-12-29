import radio from '@/pages/Shipping/Radio.module.scss'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import React, { useDispatch, useSelector } from 'react-redux'
import { shippingInputsActions } from '@/store/shippingInputs/shippingInputs.slice'
import { AppDispatch, RootState } from '@/store/store'
import { ChangeEvent } from 'react'

export const RadioShipping = () => {
	const optionsRadioValue = useSelector((state: RootState) => state.shippingInputs.optionsRadio)

	const dispatch: AppDispatch = useDispatch()

	const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		const dataValue: string = event.target.getAttribute('data-value') ?? ''
		const dataLabel: string = event.target.getAttribute('data-label') ?? ''
		dispatch(shippingInputsActions.setOptionShipping({ name, value }))
		dispatch(shippingInputsActions.setDataValue(dataValue))
		dispatch(shippingInputsActions.setDataLabel(dataLabel))
	}

	return (
		<div className={radio.radio}>
			<div className='heading'>Shipping method</div>
			<div className={radio.block}>
				<label className={shipping.item}>
					<input
						type='radio'
						name='optionsRadio'
						value='option1'
						data-value='Free'
						data-label='Standard Shipping'
						checked={optionsRadioValue === 'option1'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Standard Shipping</div>
					<div className={radio.value}>Free</div>
				</label>
				<label className={shipping.item}>
					<input
						type='radio'
						name='optionsRadio'
						value='option2'
						data-value='$10'
						data-label='Fast Shipping'
						checked={optionsRadioValue === 'option2'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Fast Shipping</div>
					<div className={radio.value}>$10</div>
				</label>
			</div>
		</div>
	)
}
