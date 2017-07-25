import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


import * as reducers from '../../_reducers';
import { Book } from '../../_models/book';
import { Filter } from './../../_models/filter';
import * as filterActions from './../../_actions/books';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	books$: Observable<Book[]>
	filter$: Observable<Filter>

	constructor(
		private store: Store<reducers.State>
	){}

	onFilterChanged(newFilters){
		this.store.dispatch(new filterActions.ChangeFilterAction(newFilters));
	}

	ngOnInit(){
		this.books$ = this.store.select(reducers.booksGetBooks);
		this.filter$ = this.store.select(reducers.booksGetFilter);
	}
}
