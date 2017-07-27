import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { iCartEntities, iCartEntity, iCartCountChange, CartCountChange } from './../../../_models/cart';

@Component({
	selector: 'store-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit, OnChanges {
	@Input() cart: iCartEntity[];
	@Output() countChanged: EventEmitter<iCartCountChange> = new EventEmitter();
	@Output() deleteCartItem: EventEmitter<number> = new EventEmitter();

	totalCost: number;

	constructor() { }

	ngOnChanges() {
		this.totalCost = this.cart.reduce((accum, item) => accum + item.count * item.book.cost, 0);
	}

	trackCart(index, cart: iCartEntity) {
		return cart.id;
	}

	ngOnInit() {
	}
}
