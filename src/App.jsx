import '@assets/styles/global.scss'
import '@assets/styles/null.scss'
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
	// const [basket, setBasket] = useState([])
	// const [cards, setCards] = useState([])
	// const [subtotal, setSubtotal] = useState(0)
	// const [isLoading, setLoading] = useState(true)
	// const [modalActive, setModalActive] = useState(false)
	// const [modalMessage, setModalMessage] = useState('')
	// const [shippingInputValues, setShippingInputValues] = useState({
	// 	inputContacts: '',
	// 	inputAddress: '',
	// 	inputCity: '',
	// 	inputCode: '',
	// 	inputProvince: null,
	// 	inputCountry: null
	// })
	// const [selectedOption, setSelectedOption] = useState('')
	// const [selectedOptionValue, setSelectedOptionValue] = useState('')
	// const [selectedOptionLabel, setSelectedOptionLabel] = useState('')

	const dispatch = useDispatch()

	// const handleOptionChange = event => {
	// 	const { name, value } = event.target
	// 	const dataValue = event.target.getAttribute('data-value')
	// 	const dataLabel = event.target.getAttribute('data-label')
	// 	dispatch(shippingInputsActions.setOptionShipping({ name, value }))
	// 	dispatch(shippingInputsActions.setDataValue(dataValue))
	// 	dispatch(shippingInputsActions.setDataLabel(dataLabel))
	// }

	// const handleOptionChange = event => {
	// 	setSelectedOption(event.target.value)
	// 	const value = event.target.getAttribute('data-value')
	// 	setSelectedOptionValue(value)
	//
	// 	const label = event.target.getAttribute('data-label')
	// 	setSelectedOptionLabel(label)
	// }

	// redux setTimeout modal
	const modalReduxActive = useSelector(state => state.modal.isOpen)
	// const modalReduxClose = useSelector(state => state.modal.isOpen)
	useEffect(() => {
		if (modalReduxActive) {
			const timer = setTimeout(() => {
				dispatch(modalActions.modalClosed())
			}, 2000)
			return () => clearTimeout(timer)
		}
	}, [modalReduxActive])

	// useEffect(() => {
	// 	if (modalActive) {
	// 		const timer = setTimeout(() => {
	// 			setModalActive(false)
	// 		}, 2000)
	// 		return () => clearTimeout(timer)
	// 	}
	// }, [modalActive])

	// const modalProps = {
	// 	modalActive,
	// 	setModalActive,
	// 	modalMessage,
	// 	setModalMessage
	// }

	// https://fakestoreapi.in/api/products
	// https://fakestoreapi.com/products
	// https://api.escuelajs.co/api/v1/products
	// useEffect(() => {
	// 	fetch('https://fakestoreapi.in/api/products')
	// 		.then(res => res.json())
	// 		.then(json => setCards(json.products))
	// 		.catch(err => {
	// 			console.warn(err)
	// 			alert('Ошибка при получении данных!')
	// 		})
	// 		.finally(() => setLoading(false))
	// }, [])

	//redux

	// const { products, loading, error } = useSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	// const addToBasket = item => {
	// 	setBasket(prevBasket => {
	// 		if (prevBasket.find(basketItem => basketItem.id === item.id)) {
	// 			return prevBasket
	// 		}
	// 		return [...prevBasket, { ...item, quantity: 1 }]
	// 	})
	// }

	// redux
	// const basketRedux = useSelector(state => state.basket)
	// const basketRedux = useSelector(state => state.basket.basket)

	// const removeFromBasket = id => {
	// 	setBasket(prevBasket => prevBasket.filter(item => item.id !== id))
	// }

	//! обновление количество redux

	// const updateQuantity = (id, quantity) => {
	// 	// setBasket(prevBasket => prevBasket.map(item => (item.id === id ? { ...item, quantity } : item)))
	// 	dispatch(actions.UpdateQuantity({ id, quantity }))
	// }

	// const handleShippingInputChange = event => {
	// 	const { name, value } = event.target
	// 	dispatch(detailsInputsActions.setInputValue({ name, value }))
	// 	// setShippingInputValues({
	// 	// 	...shippingInputValues,
	// 	// 	[name]: value
	// 	// })
	// }
	//
	// const handleShippingSelectChange = (selectedOption, actionMeta) => {
	// 	const { name } = actionMeta
	// 	const { value } = selectedOption
	// 	dispatch(detailsInputsActions.setInputValue({ name, value }))
	// 	// setShippingInputValues({
	// 	// 	...shippingInputValues,
	// 	// 	[name]: selectedOption
	// 	// })
	// }

	// const showModal = message => {
	// 	setModalMessage(message)
	// 	setModalActive(true)
	// }

	const { cardNumber, expiration, cvvCode } = usePayments()
	const { inputProvince, inputCountry } = useDetails()

	// const cardNumber = useSelector(state => state.paymentInputs.cardNumber)
	// const expiration = useSelector(state => state.paymentInputs.expiration)
	// const cvvCode = useSelector(state => state.paymentInputs.cvvCode)
	// const inputProvince = useSelector(state => state.detailsInputs.inputProvince)
	// const inputCountry = useSelector(state => state.detailsInputs.inputCountry)

	const fieldCheck = () => {
		const inputs = document.querySelectorAll(`.${style.input} input, .${paymentMethod.input} input`)
		const radioButtons = document.querySelectorAll(`.${radio.input}[type='radio']`)
		const selects = document.querySelectorAll('.item-select__control')
		const blockRadioButtons = document.querySelectorAll(`.${radio.block}`)
		const cardNumberInput = document.querySelector('[data-card]')
		const expirationInput = document.querySelector('[data-expiration]')
		const cvvCodeInput = document.querySelector('[data-cvvCode]')

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

	// const clearBasketIfConfirmed = () => {
	// 	setBasket([])
	// }

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
