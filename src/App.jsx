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

export const App = () => {
	const [basket, setBasket] = useState([])
	const [cards, setCards] = useState([])
	const [subtotal, setSubtotal] = useState(0)
	const [isLoading, setLoading] = useState(true)
	const [modalActive, setModalActive] = useState(false)
	const [modalMessage, setModalMessage] = useState('')
	const [shippingInputValues, setShippingInputValues] = useState({
		inputContacts: '',
		inputAddress: '',
		inputCity: '',
		inputCode: '',
		inputProvince: null,
		inputCountry: null
	})
	const [selectedOption, setSelectedOption] = useState('')
	const [selectedOptionValue, setSelectedOptionValue] = useState('')
	const [selectedOptionLabel, setSelectedOptionLabel] = useState('')

	// console.log(subtotal)

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

	const modalProps = {
		modalActive,
		setModalActive,
		modalMessage,
		setModalMessage
	}

	// добавить в redux thunk
	// https://fakestoreapi.in/api/products
	// https://fakestoreapi.com/products
	// https://api.escuelajs.co/api/v1/products
	useEffect(() => {
		fetch('https://fakestoreapi.in/api/products')
			.then(res => res.json())
			.then(json => setCards(json.products))
			.catch(err => {
				console.warn(err)
				alert('Ошибка при получении данных!')
			})
			.finally(() => setLoading(false))
	}, [])

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

	//redux
	const dispatch = useDispatch()

	// обновление количество redux
	const updateQuantity = (id, quantity) => {
		// setBasket(prevBasket => prevBasket.map(item => (item.id === id ? { ...item, quantity } : item)))
		dispatch(actions.UpdateQuantity({ id, quantity }))
	}

	const handleShippingInputChange = event => {
		const { name, value } = event.target
		setShippingInputValues({
			...shippingInputValues,
			[name]: value
		})
	}

	const handleShippingSelectChange = (selectedOption, actionMeta) => {
		const { name } = actionMeta
		setShippingInputValues({
			...shippingInputValues,
			[name]: selectedOption
		})
	}

	// const showModal = message => {
	// 	setModalMessage(message)
	// 	setModalActive(true)
	// }

	const fieldCheck = () => {
		const inputs = document.querySelectorAll(`.${style.input} input`)
		const radioButtons = document.querySelectorAll(`.${radio.input}[type='radio']`)
		const taxInputs = document.querySelectorAll(`.${paymentMethod.input} input`)

		let allValid = true // Переменная для проверки валидности

		// проверка инпутов на details и shipping (PaymentMethod)
		inputs.forEach(input => {
			if (!input.value.trim()) {
				allValid = false // Обновляем переменную, если находим пустое поле
			}
		})

		// проверка селектов на details
		if (!shippingInputValues.inputProvince || !shippingInputValues.inputCountry) {
			allValid = false
		}

		// Проверяем, выбрана ли хотя бы одна радиокнопка const
		if (radioButtons.length > 0) {
			const isRadioSelected = Array.from(radioButtons).some(radio => radio.checked)
			if (!isRadioSelected) {
				allValid = false
			}
		}

		if (taxInputs.length > 0) {
			taxInputs.forEach(input => {
				if (!input.value.trim()) {
					allValid = false // Обновляем переменную, если находим пустое поле
				}
			})
		}

		if (!allValid) {
			dispatch(modalActions.modalActive('Fill in the input fields!'))
			// showModal('Заполните поля ввода!')
			// event.preventDefault()
		}

		return allValid
	}

	// const clearBasketIfConfirmed = () => {
	// 	setBasket([])
	// }

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<Navigate to='/main' />} /> {/* Перенаправление на главную страницу */}
					<Route path='/main' element={<Main />} />
					<Route path='/products' element={<Products cards={cards} isLoading={isLoading} />} />
					<Route
						path='card/:id'
						element={
							<CardDetails
								cards={cards}
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
								{...modalProps}
								shippingInputValues={shippingInputValues}
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
								{...modalProps}
								shippingInputValues={shippingInputValues}
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
								{...modalProps}
								shippingInputValues={shippingInputValues}
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
