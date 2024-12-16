// import { usePayments } from '@/hooks/usePayments.js'
// import { useDetails } from '@/hooks/useDetails.js'
// import { useDispatch } from 'react-redux'
// import { validationFormActions } from '@/store/validationForm/validationForm.slice.js'
// import style from '@/pages/Details/Details.module.scss'
// import radio from '@/pages/Shipping/Radio.module.scss'
// import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'
// import { modalActions } from '@/store/modal/modal.slice.js'
// import { useCallback } from 'react'
//
// export const useFieldCheck = () => {
// 	const dispatch = useDispatch()
// 	const { cardNumber, expiration, cvvCode } = usePayments()
// 	const { inputProvince, inputCountry } = useDetails()
//
// 	const fieldCheck = useCallback(() => {
// 		const inputs = document.querySelectorAll(`.${style.input} input, .${paymentMethod.input} input`)
// 		const radioButtons = document.querySelectorAll(`.${radio.input}[type='radio']`)
// 		const selects = document.querySelectorAll('.item-select__control')
// 		const blockRadioButtons = document.querySelectorAll(`.${radio.block}`)
// 		const cardNumberInput = document.querySelector('[data-card]')
// 		const expirationInput = document.querySelector('[data-expiration]')
// 		const cvvCodeInput = document.querySelector('[data-cvv]')
//
// 		let formIsValid = true
//
// 		dispatch(validationFormActions.valid())
//
// 		const checkFullLength = (element, input, value) => {
// 			if (element.length !== value) {
// 				input.classList.add(`${paymentMethod.error}`)
// 				formIsValid = false
// 			} else {
// 				input.classList.remove(`${paymentMethod.error}`)
// 			}
// 		}
//
// 		inputs.forEach(input => {
// 			if (!input.value.trim()) {
// 				input.classList.add(`${style.error}`)
// 				input.classList.add(`${paymentMethod.error}`)
// 				formIsValid = false
// 			} else {
// 				input.classList.remove(`${style.error}`)
// 				input.classList.remove(`${paymentMethod.error}`)
// 			}
//
// 			if (cardNumber && cardNumberInput) {
// 				checkFullLength(cardNumber, cardNumberInput, 19)
// 			}
// 			if (expiration && expirationInput) {
// 				checkFullLength(expiration, expirationInput, 5)
// 			}
// 			if (cvvCode && cvvCodeInput) {
// 				checkFullLength(cvvCode, cvvCodeInput, 3)
// 			}
// 		})
//
// 		if (!inputProvince || !inputCountry) {
// 			selects.forEach(select => {
// 				select.classList.add('error')
// 			})
// 			formIsValid = false
// 		}
//
// 		if (radioButtons.length > 0) {
// 			const isRadioSelected = Array.from(radioButtons).some(radio => radio.checked)
// 			if (!isRadioSelected) {
// 				blockRadioButtons.forEach(block => {
// 					block.classList.add(`${radio.error}`)
// 				})
// 				formIsValid = false
// 			} else {
// 				blockRadioButtons.forEach(block => {
// 					block.classList.remove(`${radio.error}`)
// 				})
// 			}
// 		}
//
// 		if (!formIsValid) {
// 			dispatch(validationFormActions.invalid())
// 			dispatch(modalActions.modalActive('Fill in the input fields!'))
// 		} else {
// 			dispatch(validationFormActions.valid())
// 		}
//
// 		return formIsValid
// 	}, [cardNumber, expiration, cvvCode, inputProvince, inputCountry, dispatch])
//
// 	return { fieldCheck }
// }
