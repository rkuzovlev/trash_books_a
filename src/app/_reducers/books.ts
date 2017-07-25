import { createSelector } from '@ngrx/store';
import { Book, BookLanguage } from '../_models/book';

import * as books from '../_actions/books';

import { FilterRange, Filter } from '../_models/filter';

export interface BookEntities {
	[id: number]: Book;
}

export interface State {
	ids: number[];
	entities: BookEntities;
	filter: Filter
};

export const initialState: State = {
	ids: [],
	entities: {},
	filter: {
		cost: { from: 0, to: 10 },
		date: { from: 1970, to: 2020 },
		rating: { from: 0, to: 5 },
		lang: BookLanguage.All
	}
};

export function reducer(state = initialState, action: books.Actions): State {
	switch (action.type) {
		case books.ActionTypes.LOAD_BOOKS_SUCCESS: {
			const newBooks = action.payload as Book[];

			const newBookIds = newBooks.map(book => book.id);
			const newBookEntities = newBooks.reduce((entities: BookEntities, book: Book) => {
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

		case books.ActionTypes.ADD_BOOK: {
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

		case books.ActionTypes.CHANGE_FILTER: {
			const filter = action.payload as Filter;

			return Object.assign({}, state, { filter })
		}


		default: {
			return state;
		}
	}
}


export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getFilter = (state: State) => state.filter;

export const getBooks = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});