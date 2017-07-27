import { Book } from './book';

export interface iCartEntity {
	bookId: number;
	book: Book;
	count: number
}

export interface iCartCountChange {
	bookId: number;
	count: number;
}

export interface iCartEntities {
	[id: number]: iCartEntity;
}


export class CartCountChange implements iCartCountChange {
	constructor(
		public bookId: number,
		public count: number
	){ }
}