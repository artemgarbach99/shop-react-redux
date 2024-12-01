import style from '@/pages/Payment/Payment.module.scss'
import paymentMethod from '@/components/PaymentMethod/PaymentMethod.module.scss'

export const TaxInfo = () => {
	return (
		<div className={style.taxInfo}>
			<div className='heading'>Tax Informations</div>
			<div className={style.inner}>
				<div className={paymentMethod.input}>
					<input type='text' placeholder='VAT number  (optional)' />
				</div>
				<div className={paymentMethod.input}>
					<input type='text' placeholder='PEC (optional)' />
				</div>
			</div>
		</div>
	)
}
