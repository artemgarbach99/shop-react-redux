import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IPaymentInputs } from '@/store/paymentInputs/paymentInputs.slice'

export const usePayments = () => {
	const paymentInputs: IPaymentInputs = useSelector((state: RootState) => state.paymentInputs)
	return paymentInputs
}
