import { createSelector } from '@ngrx/store';
import { Book, BookLanguage } from '../_models/book';

import * as booksActions from '../_actions/books';
import * as cartActions from '../_actions/cart';

import { iFilterRange, iFilter } from '../_models/filter';
import { iCartEntities, iCartEntity, iCartCountChange } from '../_models/cart';

export interface iBookEntities {
	[id: number]: Book;
}

export interface State {
	ids: number[];
	entities: iBookEntities;
	filter: iFilter;
	cartIDs: number[];
	cartEntities: iCartEntities;
};

export const initialState: State = {
	ids: [],
	entities: {},
	filter: {
		cost: { from: 0, to: 10 },
		date: { from: 1970, to: 2020 },
		rating: { from: 0, to: 5 },
		lang: BookLanguage.All
	},
	cartIDs: [1, 2],
	cartEntities: {
		1: {
			id: 1,
			bookId: 1,
			book: null,
			count: 2
		},
		2: {
			id: 2,
			bookId: 2,
			book: null,
			count: 1
		}
	}
};

export function reducer(state = initialState, action: booksActions.Actions | cartActions.Actions): State {
	switch (action.type) {
		case booksActions.ActionTypes.LOAD_BOOKS_SUCCESS: {
			const newBooks = action.payload as Book[];

			const newBookIds = newBooks.map(book => book.id);
			const newBookEntities = newBooks.reduce((entities: iBookEntities, book: Book) => {
				return Object.assign(entities, {
					[book.id]: book
				});
			}, {});

			const storeDif = {
				ids: [ ...state.ids, ...newBookIds ],
				entities: Object.assign({}, state.entities, newBookEntities)
			};

			return Object.assign({}, state, storeDif)
		}

		case booksActions.ActionTypes.ADD_BOOK: {
			const book = action.payload as Book;

			var storeDif = {
				ids: [ ...state.ids ],
				entities: Object.assign({}, state.entities, { [book.id]: book })
			};

			if (state.ids.indexOf(book.id) == -1){
				storeDif.ids.push(book.id);
			}

			return Object.assign({}, state, storeDif)
		}

		case booksActions.ActionTypes.CHANGE_FILTER: {
			const filter = action.payload as iFilter;

			return Object.assign({}, state, { filter })
		}

		case cartActions.ActionTypes.CART_CHANGE_ITEM_COUNT: {
			const countChange = action.payload as iCartCountChange;

			let cartEntities = { ...state.cartEntities };

			cartEntities[countChange.cartId] = Object.assign({}, cartEntities[countChange.cartId], { count: countChange.count } );

			return Object.assign({}, state, { cartEntities })
		}

		case cartActions.ActionTypes.CART_DELETE_ITEM: {
			const cartItemId = action.payload as number;

			let cartIDs = [ ...state.cartIDs ];
			let foundIndex = cartIDs.indexOf(cartItemId);
			if (foundIndex == -1){
				return state;
			}

			cartIDs = [
				...cartIDs.slice(0, foundIndex), 
				...cartIDs.slice(foundIndex + 1)
			];

			let cartEntities = { ...state.cartEntities };
			delete cartEntities[cartItemId];

			return Object.assign({}, state, { cartEntities, cartIDs });
		}


		default: {
			return state;
		}
	}
}


export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getBooks = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});

export const getFilter = (state: State) => state.filter;

export const getCartEntities = (state: State) => state.cartEntities;
export const getCartIDs = (state: State) => state.cartIDs;
export const getCart = createSelector(getEntities, getCartEntities, getCartIDs, (bookEntities, cartEntities, ids) => {
	let insertBook = (cartItem) => {
		cartItem.book = bookEntities[cartItem.bookId];
		return cartItem;
	}
	return ids.map(id => cartEntities[id]).map(insertBook).filter(cartItem => cartItem.book);
});
