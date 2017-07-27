import { Action } from '@ngrx/store';
import { Book } from '../_models/book';
import { type } from '../utils';

import { iFilter } from '../_models/filter';

export const ActionTypes = {
	ADD_BOOK:		    type('[Books] Add book'),
	ADD_BOOKS:		    type('[Books] Add books'),
	
	LOAD_BOOKS:	        type('[Books] Load books'),
    LOAD_BOOKS_SUCCESS:	type('[Books] Load books success'),
	LOAD_BOOKS_ERROR:	type('[Books] Load books error'),
	
	CHANGE_FILTER:		type('[Books] Change filter'),
};

export class AddBookAction implements Action {
	type = ActionTypes.ADD_BOOK;
	constructor(public payload: Book) { }
}

export class AddBooksAction implements Action {
	type = ActionTypes.ADD_BOOKS;
	constructor(public payload: Book[]) { }
}



export class LoadBooksAction implements Action {
    type = ActionTypes.LOAD_BOOKS;
    payload: null;
	constructor() { }
}

export class LoadBooksErrorAction implements Action {
	type = ActionTypes.LOAD_BOOKS_ERROR;
	constructor(public payload: Error) { }
}

export class LoadBooksSuccessAction implements Action {
	type = ActionTypes.LOAD_BOOKS_SUCCESS;
	constructor(public payload: Book[]) { }
}


export class ChangeFilterAction implements Action {
	type = ActionTypes.CHANGE_FILTER;
	constructor(public payload: iFilter) { }
}

export type Actions
    = AddBookAction
    | AddBooksAction
    | LoadBooksAction
    | LoadBooksErrorAction
	| LoadBooksSuccessAction
	| ChangeFilterAction
;
