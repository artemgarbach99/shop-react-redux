import style from '@/pages/Payment/Payment.module.scss'
import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'
import { useDispatch } from 'react-redux'
import { paymentInputsActions } from '@/store/paymentInputs/paymentInputs.slice'
import { usePayments } from '@/hooks/usePayments'
import { ChangeEvent } from 'react'
import { AppDispatch } from '@/store/store'

export const TaxInfo = () => {
	const dispatch: AppDispatch = useDispatch()
	const { vatNumber, pecOptional } = usePayments()

	const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
						value={vatNumber}
						onChange={inputChange}
						placeholder='VAT number  (optional)'
					/>
				</div>
				<div className={paymentMethod.input}>
					<input
						type='text'
						name='pecOptional'
						value={pecOptional}
						onChange={inputChange}
						placeholder='PEC (optional)'
					/>
				</div>
			</div>
		</div>
	)
}
