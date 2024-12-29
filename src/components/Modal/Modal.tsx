import modal from '@components/Modal/Modal.module.scss'

interface IModalProps {
	active: boolean
	message: string
}

export const Modal = ({ active, message }: IModalProps) => {
	return (
		<div className={active ? `${modal.modal} ${modal.active}` : modal.modal}>
			<div className={modal.content}>
				<div className={modal.title}>{message}</div>
			</div>
		</div>
	)
}
