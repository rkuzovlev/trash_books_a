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
	@Output() delete = new EventEmitter();

	constructor() { }

	onItemCountChange(bookId, count) {
		this.countChanged.emit(new CartCountChange(bookId, parseInt(count)));
	}

	ngOnInit() {
	}
}
