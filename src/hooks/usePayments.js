import { useSelector } from 'react-redux'

export const usePayments = () => {
	const paymentInputs = useSelector(state => state.paymentInputs)
	// const { paymentInputs } = useSelector(state => state)
	return paymentInputs
}
