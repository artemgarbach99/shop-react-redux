import '@/assets/styles/_global.scss'
import '@/assets/styles/_null.scss'
import '@assets/styles/index.scss'
import { Products } from '@/pages/Products/Products.jsx'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { CardDetails } from '@/pages/CardDetails/CardDetails.jsx'
import { Basket } from '@/pages/Basket/Basket.jsx'
import { Main } from '@/pages/Main/Main.jsx'
import { Details } from '@/pages/Details/Details.jsx'
import { Layout, OrderPlacementLayout } from '@/layouts/Layouts.jsx'
import { Shipping } from '@/pages/Shipping/Shipping.jsx'
import { Payment } from '@/pages/Payment/Payment.jsx'
import { Confirmed } from '@/pages/Confirmed/Confirmed.jsx'
import style from '@/pages/Details/Details.module.scss'
import radio from '@/pages/Shipping/Radio.module.scss'
import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { modalActions } from '@/store/modal/modal.slice.js'
import { validationFormActions } from '@/store/validationForm/validationForm.slice.js'
import { fetchProducts } from '@/store/products/products.actions.js'
import { usePayments } from '@/hooks/usePayments.js'
import { useDetails } from '@/hooks/useDetails.js'
import { Favorites } from '@/pages/Favorites/Favorites.jsx'

export const App = () => {
	const dispatch = useDispatch()
	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const { cardNumber, expiration, cvvCode } = usePayments()
	const { inputProvince, inputCountry } = useDetails()

	useEffect(() => {
		if (modalReduxActive) {
			const timer = setTimeout(() => {
				dispatch(modalActions.modalClosed())
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [modalReduxActive])

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const fieldCheck = () => {
		const inputs = document.querySelectorAll(`.${style.input} input, .${paymentMethod.input} input`)
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
				input.classList.add(`${style.error}`)
				input.classList.add(`${paymentMethod.error}`)
				formIsValid = false
			} else {
				input.classList.remove(`${style.error}`)
				input.classList.remove(`${paymentMethod.error}`)
			}
			if (cardNumber && cardNumberInput) {
				checkFullLength(cardNumber, cardNumberInput, 19)
				// if (cardNumber.length !== 19) {
				// 	cardNumberInput.classList.add(`${paymentMethod.error}`)
				// 	formIsValid = false
				// } else {
				// 	cardNumberInput.classList.remove(`${paymentMethod.error}`)
				// }
			}
			if (expiration && expirationInput) {
				checkFullLength(expiration, expirationInput, 5)
				// if (expiration.length !== 5) {
				// 	expirationInput.classList.add(`${paymentMethod.error}`)
				// 	formIsValid = false
				// } else {
				// 	expirationInput.classList.remove(`${paymentMethod.error}`)
				// }
			}
			if (cvvCode && cvvCodeInput) {
				checkFullLength(cvvCode, cvvCodeInput, 3)
				// if (cvvCode.length !== 3) {
				// 	cvvCodeInput.classList.add(`${paymentMethod.error}`)
				// 	formIsValid = false
				// } else {
				// 	cvvCodeInput.classList.remove(`${paymentMethod.error}`)
				// }
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
	}

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Navigate to='/main' />} />
					<Route path='/main' element={<Main />} />
					<Route path='/products' element={<Products />} />
					<Route path='card/:id' element={<CardDetails />} />
					<Route path='/basket' element={<Basket />} />
					<Route path='/favorites' element={<Favorites />} />
				</Route>
				<Route path='/order' element={<OrderPlacementLayout />}>
					<Route index element={<Navigate to='details' />} />
					<Route path='details' element={<Details fieldCheck={fieldCheck} />} />
					<Route path='shipping' element={<Shipping fieldCheck={fieldCheck} />} />
					<Route path='payment' element={<Payment fieldCheck={fieldCheck} />} />
					<Route path='confirmed' element={<Confirmed />} />
				</Route>
			</Routes>
		</Router>
	)
}
