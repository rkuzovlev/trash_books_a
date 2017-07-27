import { Book } from './book';

export interface iCartEntity {
	id: number;	
	bookId: number;
	book: Book;
	count: number
}

export interface iCartCountChange {
	cartId: number;
	count: number;
}

export interface iCartEntities {
	[id: number]: iCartEntity;
}


export class CartCountChange implements iCartCountChange {
	constructor(
		public cartId: number,
		public count: number
	){ }
}