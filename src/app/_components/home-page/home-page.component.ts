import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { iCartEntities } from './../../_models/cart';
import { Book } from './../../_models/book';
import { iFilter } from './../../_models/filter';
import * as reducers from '../../_reducers';
import * as booksActions from './../../_actions/books';
import * as cartActions from './../../_actions/cart';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
	books$: Observable<Book[]>;
	filter$: Observable<iFilter>;
	cartEntities$: Observable<iCartEntities>;
	paginationPageSubs: Subscription;
	paginationPage: number = 0;

	constructor(
		private store: Store<reducers.State>
	) { }

	onAddBookToCart(bookId){
		this.store.dispatch(new cartActions.AddItemAction(bookId));
	}

	onFilterChanged(newFilters){
		this.store.dispatch(new booksActions.ChangeFilterAction(newFilters));
	}

	onPageChanged(newPage) {
		this.store.dispatch(new booksActions.ChangePageAction(newPage));
	}

	ngOnDestroy() {
		this.paginationPageSubs.unsubscribe();
	}

	ngOnInit() {
		this.books$ = this.store.select(reducers.booksGetFilteredBooks);
		this.filter$ = this.store.select(reducers.booksGetFilter);
		this.cartEntities$ = this.store.select(reducers.booksGetCartEntities);
		this.paginationPageSubs = this.store.select(reducers.booksGetPaginationPage)
			.subscribe((page) => this.paginationPage = page);
	}
}
