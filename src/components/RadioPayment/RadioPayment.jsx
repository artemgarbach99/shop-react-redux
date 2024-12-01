import radio from '@/pages/Shipping/Radio.module.scss'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useState } from 'react'

export const RadioPayment = () => {
	const [selectedPaymentOption, setSelectedPaymentOption] = useState('')
	const handleOptionChange = event => {
		setSelectedPaymentOption(event.target.value)
	}

	return (
		<div className={radio.radio}>
			<div className='heading'>Shipping method</div>
			<div className={radio.block}>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option1'
						checked={selectedPaymentOption === 'option1'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Same as the shipping address</div>
				</label>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option2'
						checked={selectedPaymentOption === 'option2'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Use a different address for billing</div>
				</label>
			</div>
		</div>
	)
}
