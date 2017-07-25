import { NgModule } 	from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } 		from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } 		from './../shared.module';
import { StoreRoutingModule } 	from './store-routing.module';

import { FilterComponent }		from './components/filter/filter.component';
import { ListComponent }		from './components/list/list.component';
import { CartSmallComponent } 	from './components/cart-small/cart-small.component';
import { RatingComponent }		from './components/rating/rating.component';
import { BookComponent } 		from './components/book/book.component';

import { BookService } from './services/book/book.service';

import { State } from './../_reducers';

import * as booksActions from './../_actions/books';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		StoreRoutingModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [FilterComponent, ListComponent, CartSmallComponent, RatingComponent, BookComponent],
	exports: [FilterComponent, ListComponent, CartSmallComponent],
	providers: [BookService]
})
export class StoreModule {
	constructor(
		private store: Store<State>
	){
		this.store.dispatch(new booksActions.LoadBooksAction());
	}
}