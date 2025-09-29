import main from '@pages/Main/Main.module.scss'
import { Link } from 'react-router-dom'
// import bgImage from '@assets/images/main/bg.jpg'

export const Main = () => {
	return (
		<div className={main.main}>
			{/* <div className='container'> */}
			<div className={main.bg}>
				<img src='./images/main/bg.jpg' alt='' />
			</div>
			<div className={main.content}>
				<div className={main.title}>Let's go shopping</div>
				<Link to='/products' className={main.link}>
					Discovery our collection
				</Link>
			</div>
			{/* </div> */}
		</div>
	)
}
