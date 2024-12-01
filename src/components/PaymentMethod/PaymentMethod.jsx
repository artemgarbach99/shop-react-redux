import style from '@components/PaymentMethod/PaymentMethod.module.scss'
import { AiFillCreditCard } from 'react-icons/ai'
import InputMask from 'react-input-mask'
import { useState } from 'react'

export const PaymentMethod = () => {
	const [inputValueCard, setInputValueCard] = useState('')
	const [inputValueHolder, setInputValueHolder] = useState('')
	const [inputValueDate, setInputValueDate] = useState('')

	const inputChangeCard = e => {
		const value = e.target.value
		setInputValueCard(value)
	}

	const inputChangeHolder = e => {
		const value = e.target.value.toUpperCase()
		const filteredValue = value.replace(/[^A-Z ]/g, '')
		setInputValueHolder(filteredValue)
	}

	const inputChangeDate = e => {
		const value = e.target.value
		const [month, year] = value.split('/')
		if (month && parseInt(month, 10) > 12) {
			setInputValueDate('12' + (year ? '/' + year : ''))
		} else {
			setInputValueDate(value)
		}
	}

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
							value={inputValueCard}
							onChange={inputChangeCard}
							className={style.inputMasked}
						/>
					</div>
					<div className={style.input}>
						<input
							type='text'
							placeholder='Holder Name'
							value={inputValueHolder}
							className={style.inputHolder}
							onChange={inputChangeHolder}
						/>
					</div>
					<div className={style.row}>
						<div className={style.input}>
							<InputMask
								mask='99/99'
								value={inputValueDate}
								onChange={inputChangeDate}
								placeholder='Expiration (MM/YY)'
							/>
						</div>
						<div className={style.input}>
							<InputMask mask='999' placeholder='CVV' maskChar='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
