import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { iCartEntities, iCartEntity } from './../../../_models/cart';

@Component({
	selector: 'store-cart-small',
	templateUrl: './cart-small.component.html',
	styleUrls: ['./cart-small.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartSmallComponent implements OnInit, OnChanges {
	@Input() cart: iCartEntity[];
	countItems: number;
	totalCost: number;

	constructor() { }

	ngOnChanges() {
		this.countItems = 0;
		this.totalCost = 0;
		this.cart.forEach((item) => {
			this.countItems += item.count;
			this.totalCost += item.book.cost * item.count;
		});
	}

	ngOnInit() {
	}
}
