import { useSelector } from 'react-redux'

export const usePayments = () => {
	const paymentInputs = useSelector(state => state.paymentInputs)
	return paymentInputs
}
