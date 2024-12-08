import style from '@/pages/Payment/Payment.module.scss'
import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { paymentInputsActions } from '@/store/paymentInputs/paymentInputs.slice.js'

export const TaxInfo = () => {
	const vatNumberValue = useSelector(state => state.paymentInputs.vatNumber)
	const pecOptionalValue = useSelector(state => state.paymentInputs.pecOptional)

	const dispatch = useDispatch()

	const inputChange = e => {
		const { name, value } = e.target
		dispatch(paymentInputsActions.setValuePayment({ name, value }))
	}

	return (
		<div className={style.taxInfo}>
			<div className='heading'>Tax Informations</div>
			<div className={style.inner}>
				<div className={paymentMethod.input}>
					<input
						type='text'
						name='vatNumber'
						value={vatNumberValue}
						onChange={inputChange}
						placeholder='VAT number  (optional)'
					/>
				</div>
				<div className={paymentMethod.input}>
					<input
						type='text'
						name='pecOptional'
						value={pecOptionalValue}
						onChange={inputChange}
						placeholder='PEC (optional)'
					/>
				</div>
			</div>
		</div>
	)
}
