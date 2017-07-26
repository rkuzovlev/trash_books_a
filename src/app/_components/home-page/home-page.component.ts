import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Book } from './../../_models/book';
import { Filter } from './../../_models/filter';
import * as reducers from '../../_reducers';
import * as filterActions from './../../_actions/books';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	books$: Observable<Book[]>
	filter$: Observable<Filter>

	constructor(
		private store: Store<reducers.State>
	) { }

	onFilterChanged(newFilters){
		this.store.dispatch(new filterActions.ChangeFilterAction(newFilters));
	}

	ngOnInit() {
		this.books$ = this.store.select(reducers.booksGetBooks);
		this.filter$ = this.store.select(reducers.booksGetFilter);
	}
}
