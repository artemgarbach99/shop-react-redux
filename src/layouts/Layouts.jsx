import { Outlet } from 'react-router-dom'
import { Header } from '@/components/Header/Header.jsx'
import { Footer } from '@/components/Footer/Footer.jsx'
import style from '@/layouts/Layouts.module.scss'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.jsx'
import { OrderProducts } from '@/pages/OrderProducts/OrderProducts.jsx'

const Layout = () => {
	return (
		<div className='wrapper'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}

const OrderPlacementLayout = () => {
	return (
		<div className='wrapper'>
			<div className={style.page}>
				<div className='container'>
					<div className={style.body}>
						<div className={style.order}>
							<Breadcrumbs />
							<Outlet />
						</div>
						<div className={style.products}>
							<OrderProducts
							// basket={basket}
							// subtotal={subtotal}
							// isLoading={isLoading}
							// selectedOptionValue={selectedOptionValue}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Layout, OrderPlacementLayout }
