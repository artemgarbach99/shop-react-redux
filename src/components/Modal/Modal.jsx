import modal from '@components/Modal/Modal.module.scss'

export const Modal = ({ active, message }) => {

	return (
		<div className={active ? `${modal.modal} ${modal.active}` : modal.modal}>
			<div className={modal.content}>
				<div className={modal.title}>{message}</div>
			</div>
		</div>
	)
}