import { Outlet } from 'react-router-dom'
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import style from '@/layouts/Layouts.module.scss'
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs.tsx'
import { OrderProducts } from '@pages/OrderProducts/OrderProducts.tsx'

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
							<OrderProducts />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Layout, OrderPlacementLayout }
