import radio from '@/pages/Shipping/Radio.module.scss'
import shipping from '@/pages/Shipping/Shipping.module.scss'

export const RadioShipping = ({ selectedOption, handleOptionChange }) => {
	return (
		<div className={radio.radio}>
			<div className='heading'>Shipping method</div>
			<div className={radio.block}>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option1'
						data-value='Free'
						data-label='Standard Shipping'
						checked={selectedOption === 'option1'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Standard Shipping</div>
					<div className={radio.value}>Free</div>
				</label>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option2'
						data-value='$10'
						data-label='Fast Shipping'
						checked={selectedOption === 'option2'}
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
