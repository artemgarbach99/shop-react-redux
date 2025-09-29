import { Outlet } from 'react-router-dom'
import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import style from '@/layouts/Layouts.module.scss'
import { Breadcrumbs } from '@components/Breadcrumbs/Breadcrumbs'
import { OrderProducts } from '@pages/OrderProducts/OrderProducts'
import { useState } from 'react'

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
	const [showOrder, setShowOrder] = useState(false)
	return (
		<div className='wrapper'>
			<div className={`${style.page} ${showOrder ? style.lock : ''}`}>
				<div className='container'>
					<div className={style.body}>
						<div className={style.order}>
							<Breadcrumbs />
							<Outlet context={{ showOrder, setShowOrder }} />
						</div>
						{/* <div className={style.products}> */}
						{/* <OrderProducts /> */}
						<OrderProducts showOrder={showOrder} setShowOrder={setShowOrder} />
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export { Layout, OrderPlacementLayout }
