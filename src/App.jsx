import '@assets/styles/global.scss'
import '@assets/styles/null.scss'
import '@assets/styles/index.scss'
import { Products } from '@/pages/Products/Products.jsx'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
import { actions } from '@/store/basket/basket.slice.js'
import { modalActions } from '@/store/modal/modal.slice.js'
import { validationFormActions } from '@/store/validationForm/validationForm.slice.js'
import { shippingInputsActions } from '@/store/shippingInputs/shippingInputs.slice.js'
import { fetchProducts } from '@/store/products/products.actions.js'

export const App = () => {
	const [basket, setBasket] = useState([])
	// const [cards, setCards] = useState([])
	const [subtotal, setSubtotal] = useState(0)
	const [isLoading, setLoading] = useState(true)
	const [modalActive, setModalActive] = useState(false)
	const [modalMessage, setModalMessage] = useState('')
	// const [shippingInputValues, setShippingInputValues] = useState({
	// 	inputContacts: '',
	// 	inputAddress: '',
	// 	inputCity: '',
	// 	inputCode: '',
	// 	inputProvince: null,
	// 	inputCountry: null
	// })
	const [selectedOption, setSelectedOption] = useState('')
	const [selectedOptionValue, setSelectedOptionValue] = useState('')
	const [selectedOptionLabel, setSelectedOptionLabel] = useState('')

	//! добавить в redux
	const handleOptionChange = event => {
		setSelectedOption(event.target.value)
		const value = event.target.getAttribute('data-value')
		setSelectedOptionValue(value)

		const label = event.target.getAttribute('data-label')
		setSelectedOptionLabel(label)
	}

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
	//! изнчальное получение products

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
	const dispatch = useDispatch()

	//! redux productsSlice

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

	// обновление количество redux
	const updateQuantity = (id, quantity) => {
		// setBasket(prevBasket => prevBasket.map(item => (item.id === id ? { ...item, quantity } : item)))
		dispatch(actions.UpdateQuantity({ id, quantity }))
	}

	const handleShippingInputChange = event => {
		const { name, value } = event.target
		dispatch(shippingInputsActions.setInputValue({ name, value }))
		// setShippingInputValues({
		// 	...shippingInputValues,
		// 	[name]: value
		// })
	}

	const handleShippingSelectChange = (selectedOption, actionMeta) => {
		const { name } = actionMeta
		const { value } = selectedOption
		dispatch(shippingInputsActions.setInputValue({ name, value }))
		// setShippingInputValues({
		// 	...shippingInputValues,
		// 	[name]: selectedOption
		// })
	}

	// const showModal = message => {
	// 	setModalMessage(message)
	// 	setModalActive(true)
	// }

	const shippingInputProvince = useSelector(state => state.shippingInputs.inputProvince)
	const shippingInputCountry = useSelector(state => state.shippingInputs.inputCountry)

	const fieldCheck = () => {
		const inputs = document.querySelectorAll(`.${style.input} input, .${paymentMethod.input} input`)
		const radioButtons = document.querySelectorAll(`.${radio.input}[type='radio']`)
		// const selects = document.querySelectorAll(`.${style.select}`)
		const selects = document.querySelectorAll('.item-select__control')
		const blockRadioButtons = document.querySelectorAll(`.${radio.block}`)

		let formIsValid = true

		dispatch(validationFormActions.valid())

		// for (let input of inputs) {
		// 	if (!input.value.trim()) {
		// 		formIsValid = false
		// 		break
		// 	}
		// 	inputs.forEach(input => {
		// 		if (!input.value.trim()) {
		// 			input.classList.add(`${style.error}`)
		// 			formIsValid = false
		// 		} else {
		// 			input.classList.remove(`${style.error}`)
		// 		}
		// 	})
		// }

		inputs.forEach(input => {
			if (!input.value.trim()) {
				input.classList.add(`${style.error}`)
				input.classList.add(`${paymentMethod.error}`)
				formIsValid = false
			} else {
				input.classList.remove(`${style.error}`)
				input.classList.remove(`${paymentMethod.error}`)
			}
		})

		// if (!shippingInputValues.inputProvince || !shippingInputValues.inputCountry) {
		// 	formIsValid = false
		// }

		if (!shippingInputProvince || !shippingInputCountry) {
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
					<Route
						path='/products'
						element={
							<Products
								// cards={cards}
								isLoading={isLoading}
							/>
						}
					/>
					<Route
						path='card/:id'
						element={
							<CardDetails
								// cards={cards}
								// addToBasket={addToBasket}
								// basket={basket}
								isLoading={isLoading}
								/*{...modalProps}*/
							/>
						}
					/>
					<Route
						path='/basket'
						element={
							<Basket
								basket={basket}
								// removeFromBasket={removeFromBasket}
								subtotal={subtotal}
								setSubtotal={setSubtotal}
								updateQuantity={updateQuantity}
								isLoading={isLoading}
								// basketRedux={basketRedux}
							/>
						}
					/>
				</Route>
				<Route
					path='/order'
					element={
						<OrderPlacementLayout
							basket={basket}
							subtotal={subtotal}
							isLoading={isLoading}
							selectedOptionValue={selectedOptionValue}
						/>
					}>
					<Route index element={<Navigate to='details' />} />
					<Route
						path='details'
						element={
							<Details
								/*{...modalProps}*/
								// shippingInputValues={shippingInputValues}
								handleShippingInputChange={handleShippingInputChange}
								handleShippingSelectChange={handleShippingSelectChange}
								fieldCheck={fieldCheck}
							/>
						}
					/>
					<Route
						path='shipping'
						element={
							<Shipping
								/*{...modalProps}*/
								// shippingInputValues={shippingInputValues}
								selectedOption={selectedOption}
								handleOptionChange={handleOptionChange}
								fieldCheck={fieldCheck}
							/>
						}
					/>
					<Route
						path='payment'
						element={
							<Payment
								/*{...modalProps}*/
								// shippingInputValues={shippingInputValues}
								selectedOptionValue={selectedOptionValue}
								selectedOptionLabel={selectedOptionLabel}
								fieldCheck={fieldCheck}
							/>
						}
					/>
					<Route path='confirmed' element={<Confirmed setBasket={setBasket} />} />
				</Route>
			</Routes>
		</Router>
	)
}
