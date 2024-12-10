import { useSelector } from 'react-redux'

export const useDetails = () => {
	const detailsInputs = useSelector(state => state.detailsInputs)
	return detailsInputs
}
