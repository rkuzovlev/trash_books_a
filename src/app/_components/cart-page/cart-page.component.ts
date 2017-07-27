import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { iCartEntities, iCartEntity, iCartCountChange } from './../../_models/cart';
import * as reducers from '../../_reducers';
import { ChangeItemCountAction, DeleteItemAction } from './../../_actions/cart';

@Component({
	selector: 'app-cart-page',
	templateUrl: './cart-page.component.html',
	styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
	cart$: Observable<iCartEntity[]>

	constructor(
		private store: Store<reducers.State>
	) { }

	onCartItemDelete(cartItemId: number){
		this.store.dispatch(new DeleteItemAction(cartItemId));
	}

	onCartItemCountChanged(newCount: iCartCountChange){
		this.store.dispatch(new ChangeItemCountAction(newCount));
	}

	ngOnInit() {
		this.cart$ = this.store.select(reducers.booksGetCart);
	}
}
