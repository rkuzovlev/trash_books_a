import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';

import * as actionsBooks from './../_actions/books';

import { BookService } from './../store/services/book/book.service';

@Injectable()
export class BooksEffects {
	@Effect() loadBooks$: Observable<Action> = this.actions$.ofType(actionsBooks.ActionTypes.LOAD_BOOKS)
		.map(toPayload)
		.switchMap(payload => this.bookService.fetch())
		.switchMap((books) => of(new actionsBooks.LoadBooksSuccessAction(books)))
		.catch(err => of(new actionsBooks.LoadBooksErrorAction(err)))
	;

	constructor (
		private bookService: BookService,
		private actions$: Actions
	) {}			
}