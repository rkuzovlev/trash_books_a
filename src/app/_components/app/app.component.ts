import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { iCartEntities, iCartEntity } from './../../_models/cart';
import * as reducers from '../../_reducers';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	cart$: Observable<iCartEntity[]>

	constructor(
		private store: Store<reducers.State>
	){}

	ngOnInit(){
		this.cart$ = this.store.select(reducers.booksGetCart);
	}
}
