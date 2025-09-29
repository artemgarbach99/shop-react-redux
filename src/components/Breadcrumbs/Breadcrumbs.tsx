import { Link, useLocation } from 'react-router-dom'
import breadcrumbs from '@components/Breadcrumbs/Breadcrumbs.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const Breadcrumbs = () => {
	const location = useLocation()
	const path: string = location.pathname.split('/').pop() || ''

	const getClassName = (step: string) => {
		const steps = ['basket', 'details', 'shipping', 'payment']
		const currentIndex = steps.indexOf(path)
		const stepIndex = steps.indexOf(step)
		if (stepIndex < currentIndex) {
			return `${breadcrumbs.item} ${breadcrumbs.active}`
		} else if (stepIndex === currentIndex) {
			return `${breadcrumbs.item} ${breadcrumbs.current}`
		} else {
			return breadcrumbs.item
		}
	}

	return (
		<div className={breadcrumbs.breadcrumbs}>
			<Link to='/main' className={breadcrumbs.logo}>
				<img src='./logo.svg' alt='Logo' />
			</Link>
			<ul className={breadcrumbs.nav}>
				<li className={getClassName('basket')}>
					<Link to={'/basket'}>Basket</Link>
					<AiOutlineArrowRight />
				</li>
				<li className={getClassName('details')}>
					<Link to={'/order/details'}>Details</Link>
					<AiOutlineArrowRight />
				</li>
				<li className={getClassName('shipping')}>
					<Link to={'/order/shipping'}>Shipping</Link>
					<AiOutlineArrowRight />
				</li>
				<li className={getClassName('payment')}>
					<Link to={'/order/payment'}>Payment</Link>
				</li>
			</ul>
		</div>
	)
}
