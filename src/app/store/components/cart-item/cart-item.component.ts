import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { iCartEntities, iCartEntity, iCartCountChange, CartCountChange } from './../../../_models/cart';

@Component({
	selector: '[store-cart-item]',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
	@Input() item: iCartEntity;
	@Output() countChanged: EventEmitter<iCartCountChange> = new EventEmitter();

	constructor() { }

	onItemDelete(cartItemId) {
		console.log('onItemDelete', cartItemId);
	}

	onItemCountChange(cartItemId, count) {
		this.countChanged.emit(new CartCountChange(cartItemId, parseInt(count)));
	}

	ngOnInit() {
	}
}
