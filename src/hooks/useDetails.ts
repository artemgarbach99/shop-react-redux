import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export const useDetails = () => {
	const detailsInputs = useSelector((state: RootState) => state.detailsInputs)
	return detailsInputs
}
