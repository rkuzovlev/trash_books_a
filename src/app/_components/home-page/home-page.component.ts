import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from './../../_models/book';
import { iFilter } from './../../_models/filter';
import * as reducers from '../../_reducers';
import * as booksActions from './../../_actions/books';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	books$: Observable<Book[]>
	filter$: Observable<iFilter>

	constructor(
		private store: Store<reducers.State>
	) { }

	onFilterChanged(newFilters){
		this.store.dispatch(new booksActions.ChangeFilterAction(newFilters));
	}

	ngOnInit() {
		this.books$ = this.store.select(reducers.booksGetBooks);
		this.filter$ = this.store.select(reducers.booksGetFilter);
	}
}
