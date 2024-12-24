import radio from '@/pages/Shipping/Radio.module.scss'
import shipping from '@/pages/Shipping/Shipping.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { paymentInputsActions } from '@/store/paymentInputs/paymentInputs.slice'

export const RadioPayment = () => {
	const dispatch = useDispatch()

	const handleOptionChange = event => {
		const { name, value } = event.target
		dispatch(paymentInputsActions.setValuePayment({ name, value }))
	}

	const billingAddressValue = useSelector(state => state.paymentInputs.billingAddress)

	return (
		<div className={radio.radio}>
			<div className='heading'>Billing address</div>
			<div className={radio.block}>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option1'
						name='billingAddress'
						checked={billingAddressValue === 'option1'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Same as the shipping address</div>
				</label>
				<label className={shipping.item}>
					<input
						type='radio'
						value='option2'
						name='billingAddress'
						checked={billingAddressValue === 'option2'}
						onChange={handleOptionChange}
						className={radio.input}
					/>
					<div className={radio.label}>Use a different address for billing</div>
				</label>
			</div>
		</div>
	)
}
