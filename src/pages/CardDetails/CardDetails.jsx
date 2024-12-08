import { Link, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from 'react-icons/ai'
import style from '@/pages/CardDetails/CardDetails.module.scss'
import { Modal } from '@/components/Modal/Modal.jsx'
import { Skeleton } from '@/components/Skeleton/Skeleton.jsx'
import { actions } from '@/store/basket/basket.slice.js'
import { modalActions } from '@/store/modal/modal.slice.js'
import { useDispatch, useSelector } from 'react-redux'

export const CardDetails = (
	{
		// cards,
		// addToBasket,
		// basket,
		// isLoading
		// products
		// setModalActive,
		// setModalMessage,
		// modalActive,
		// modalMessage
	}
) => {
	//redux modal
	const basketRedux = useSelector(state => state.basket.basket)
	const modalReduxActive = useSelector(state => state.modal.isOpen)
	const modalReduxMessage = useSelector(state => state.modal.message)

	// const basketItem = useSelector(state => state.basket)
	//
	const dispatch = useDispatch()

	const { products, loading, error } = useSelector(state => state.products)
	//
	// dispatch(modalActions.ModalActive('123'))
	// console.log(basketItem)

	const { id } = useParams()
	// const card = cards.find(card => card.id === parseInt(id))
	// redux
	const product = products.find(prod => prod.id === parseInt(id))

	// const onClickButton = () => {
	// 	handleAddToCart()
	// 	// setModalActive(true)
	// }
	if (!product) {
		return <div className={style['not-found']}>Card not found!</div>
	}

	// if (!card) {
	// 	return <div className={style['not-found']}>Card not found!</div>
	// }

	// const handleAddToBasket = card => {
	// 	dispatch(actions.AddToBasket(card))
	// }

	const isInBasket = basketRedux.some(basketItem => basketItem.id === product.id)

	const handleAddToCart = () => {
		if (isInBasket) {
			// setModalMessage('The product is already in your cart!')
			dispatch(modalActions.modalActive('The product is already in your cart!'))
		} else {
			// handleAddToBasket(card)
			// addToBasket({ ...card })
			// setModalMessage('Product added!')
			dispatch(actions.AddToBasket(product))
			dispatch(modalActions.modalActive('Product added!'))
		}
	}

	return (
		<div className={style.card}>
			<div className='container'>
				<div className={style.body}>
					<div className={style.main}>
						<div className={style.image}>
							{loading ? (
								<div className='loader-svg-wrap'>
									<Skeleton />
								</div>
							) : (
								<img src={product.image} alt={product.title} />
							)}
						</div>
						<div className={style.content}>
							<div className={style.top}>
								<h1 className={style.title}>{product.title}</h1>
								<div className={style.description}>{product.description}</div>
							</div>
							<div className={style.row}>
								<div className={style.column}>
									<p className={style.price}>$ {product.price}</p>
								</div>
								<div className={style.column}>
									{/*<button className={`${style.button}`} onClick={onClickButton}>*/}
									{/*	<AiOutlineShoppingCart size='20' />*/}
									{/*	/!*{isInBasket ? 'In Basket' : 'Add to cart'}*!/*/}
									{/*</button>*/}
									<button className={`${style.button} ${isInBasket ? style.inBasket : ''}`} onClick={handleAddToCart}>
										<AiOutlineShoppingCart size='20' />
										{isInBasket ? 'In Basket' : 'Add to cart'}
									</button>
								</div>
							</div>
						</div>
					</div>
					<Link to='/products' className={style.link}>
						<AiOutlineArrowLeft size={20} />
						Back to shopping
					</Link>
				</div>
			</div>
			{/*<Modal active={modalActive} message={modalMessage} />*/}
			<Modal active={modalReduxActive} message={modalReduxMessage} />
		</div>
	)
}
