import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actions } from '@/store/basket/basket.slice.js'
import { useCallback } from 'react'
import details from '@/pages/Details/Details.module.scss'
import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'
import radio from '@/pages/Shipping/Radio.module.scss'
import layouts from '@layouts/Layouts.module.scss'
import { validationFormActions } from '@/store/validationForm/validationForm.slice.js'
import { modalActions } from '@/store/modal/modal.slice.js'
import { usePayments } from '@/hooks/usePayments.js'
import { useDetails } from '@/hooks/useDetails.js'

export const NavigationOrder = ({ currentPage }) => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	// const { fieldCheck } = useFieldCheck()
	const { cardNumber, expiration, cvvCode } = usePayments()
	const { inputProvince, inputCountry } = useDetails()

	const fieldCheck = useCallback(() => {
		const inputs = document.querySelectorAll(`.${details.input} input, .${paymentMethod.input} input`)
		const radioButtons = document.querySelectorAll(`.${radio.input}[type='radio']`)
		const selects = document.querySelectorAll('.item-select__control')
		const blockRadioButtons = document.querySelectorAll(`.${radio.block}`)
		const cardNumberInput = document.querySelector('[data-card]')
		const expirationInput = document.querySelector('[data-expiration]')
		const cvvCodeInput = document.querySelector('[data-cvv]')

		let formIsValid = true

		dispatch(validationFormActions.valid())

		const checkFullLength = (element, input, value) => {
			if (element.length !== value) {
				input.classList.add(`${paymentMethod.error}`)
				formIsValid = false
			} else {
				input.classList.remove(`${paymentMethod.error}`)
			}
		}

		inputs.forEach(input => {
			if (!input.value.trim()) {
				input.classList.add(`${details.error}`)
				input.classList.add(`${paymentMethod.error}`)
				formIsValid = false
			} else {
				input.classList.remove(`${details.error}`)
				input.classList.remove(`${paymentMethod.error}`)
			}

			if (cardNumber && cardNumberInput) {
				checkFullLength(cardNumber, cardNumberInput, 19)
			}
			if (expiration && expirationInput) {
				checkFullLength(expiration, expirationInput, 5)
			}
			if (cvvCode && cvvCodeInput) {
				checkFullLength(cvvCode, cvvCodeInput, 3)
			}
		})

		if (!inputProvince || !inputCountry) {
			selects.forEach(select => {
				select.classList.add('error')
			})
			formIsValid = false
		}

		if (radioButtons.length > 0) {
			const isRadioSelected = Array.from(radioButtons).some(radio => radio.checked)
			if (!isRadioSelected) {
				blockRadioButtons.forEach(block => {
					block.classList.add(`${radio.error}`)
				})
				formIsValid = false
			} else {
				blockRadioButtons.forEach(block => {
					block.classList.remove(`${radio.error}`)
				})
			}
		}

		if (!formIsValid) {
			dispatch(validationFormActions.invalid())
			dispatch(modalActions.modalActive('Fill in the input fields!'))
		} else {
			dispatch(validationFormActions.valid())
		}

		return formIsValid
	}, [cardNumber, expiration, cvvCode, inputProvince, inputCountry, dispatch])

	const handleNextClick = () => {
		if (!fieldCheck()) return

		if (currentPage === 'details') {
			navigate('/order/shipping')
		} else if (currentPage === 'shipping') {
			navigate('/order/payment')
		} else if (currentPage === 'payment') {
			navigate('/order/confirmed')
		}
	}

	const handlePreviousClick = () => {
		if (currentPage === 'details') {
			navigate('/basket')
		} else if (currentPage === 'shipping') {
			navigate('/order/details')
		} else if (currentPage === 'payment') {
			navigate('/order/shipping')
		} else if (currentPage === 'confirmed') {
			navigate('/order/payment')
		}
	}

	const handleBackToProducts = elem => {
		elem.preventDefault()
		dispatch(actions.clearBasket())
		navigate('/products')
	}

	return (
		<div className={layouts.buttons}>
			{currentPage === 'confirmed' ? (
				<button type='button' className={layouts.back}>
					Print receipt
				</button>
			) : (
				<button className={layouts.back} onClick={handlePreviousClick}>
					{currentPage === 'details' && 'Back to basket'}
					{currentPage === 'shipping' && 'Back to details'}
					{currentPage === 'payment' && 'Back to shipping'}
				</button>
			)}

			{currentPage === 'confirmed' ? (
				<div className={layouts.button} onClick={handleBackToProducts}>
					Back to shopping
				</div>
			) : (
				<button type='button' className={layouts.button} onClick={event => handleNextClick(event)}>
					{currentPage === 'details' && 'Go to shipping'}
					{currentPage === 'shipping' && 'Go to payment'}
					{currentPage === 'payment' && 'Pay now'}
				</button>
			)}
		</div>
	)
}
