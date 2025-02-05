import style from '@components/PaymentMethod/PaymentMethod.module.scss'
import { AiFillCreditCard } from 'react-icons/ai'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { paymentInputsActions } from '@/store/paymentInputs/paymentInputs.slice'
import { AppDispatch, RootState } from '@/store/store'
import { ChangeEvent } from 'react'

export const PaymentMethod = () => {
	const dispatch: AppDispatch = useDispatch()

	const inputChangeCard = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		dispatch(paymentInputsActions.setValuePayment({ name, value }))
	}

	const inputChangeHolder = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const filteredValue = value.toUpperCase().replace(/[^A-Z ]/g, '')
		dispatch(paymentInputsActions.setValuePayment({ name, value: filteredValue }))
	}

	const inputChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		const [month, year] = value.split('/')
		if (month && parseInt(month, 10) > 12) {
			const conditionMaxYear = '12' + (year ? '/' + year : '')
			dispatch(paymentInputsActions.setValuePayment({ name, value: conditionMaxYear }))
		} else {
			dispatch(paymentInputsActions.setValuePayment({ name, value }))
		}
	}

	const cardNumberValue = useSelector((state: RootState) => state.paymentInputs.cardNumber)
	const holderNameValue = useSelector((state: RootState) => state.paymentInputs.holderName)
	const expirationValue = useSelector((state: RootState) => state.paymentInputs.expiration)
	const cvvCode = useSelector((state: RootState) => state.paymentInputs.cvvCode)

	return (
		<div className={style['payment-method']}>
			<div className='heading'>Shipping method</div>
			<div className={style.card}>
				<div className={style.top}>
					<AiFillCreditCard size={30} />
					Credit Card
				</div>
				<div className={style.inner}>
					<div className={style.input}>
						<InputMask
							mask='9999 9999 9999 9999'
							placeholder='Card Number'
							name='cardNumber'
							value={cardNumberValue || ''}
							onChange={inputChangeCard}
							data-card
							maskChar=''
						/>
					</div>
					<div className={style.input}>
						<input
							type='text'
							placeholder='Holder Name'
							name='holderName'
							value={holderNameValue}
							onChange={inputChangeHolder}
							className={style.inputHolder}
						/>
					</div>
					<div className={style.row}>
						<div className={style.input}>
							<InputMask
								mask='99/99'
								name='expiration'
								value={expirationValue || ''}
								onChange={inputChangeDate}
								placeholder='Expiration (MM/YY)'
								data-expiration
								maskChar=''
							/>
						</div>
						<div className={style.input}>
							<InputMask
								mask='999'
								name='cvvCode'
								value={cvvCode || ''}
								placeholder='CVV'
								data-cvv
								maskChar=''
								onChange={inputChangeCard}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
