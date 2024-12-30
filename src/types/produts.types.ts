export interface IProduct {
	id: number
	title: string
	image: string
	price: number
	quantity: number
	description: string
}

export type updateQuantity = Pick<IProduct, 'id' | 'quantity'>
export type removeFromBasket = Pick<IProduct, 'id' | 'quantity' | 'price'>
export type CardProduct = Omit<IProduct, 'quantity' | 'description'>
