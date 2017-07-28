import { createSelector, ActionReducerMap } from '@ngrx/store';
// import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/store';
// import { combineReducers } from '@ngrx/store';

import * as fromBooks from './books';

export interface State {
	books: fromBooks.State;
	// router: fromRouter.RouterState;
}

export const reducers = {
	books: fromBooks.reducer,
	// router: fromRouter.routerReducer,
};

export const initialState: State = {
	books: fromBooks.initialState
}

export let booksState = (state: State) => state.books;
export let booksGetBooks = createSelector(booksState, fromBooks.getBooks);
export let booksGetFilteredBooks = createSelector(booksState, fromBooks.getFilteredBooks);
export let booksGetFilter = createSelector(booksState, fromBooks.getFilter);
export let booksGetCart = createSelector(booksState, fromBooks.getCart);
export let booksGetCartEntities = createSelector(booksState, fromBooks.getCartEntities);
export let booksGetPaginationPage = createSelector(booksState, fromBooks.getPaginationPage);