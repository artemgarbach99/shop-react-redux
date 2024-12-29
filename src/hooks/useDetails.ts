import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { IStateDetailsInputs } from '@/store/detailsInputs/detailsInputs.slice'

export const useDetails = () => {
	const detailsInputs: IStateDetailsInputs = useSelector((state: RootState) => state.detailsInputs)
	return detailsInputs
}
