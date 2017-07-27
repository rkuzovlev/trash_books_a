import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../../../_models/book';
import { iFilter } from './../../../_models/filter';
import { iCartEntities } from './../../../_models/cart';

@Component({
	selector: 'store-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
	@Input() books: Book[]
	@Input() filter: iFilter;
	@Input() cartEntities: iCartEntities;
	@Output() addBookToCart: EventEmitter<number> = new EventEmitter();

	constructor() { }

	trackBooks(index, book) {
		return book.id;
	}

	getCountInCartForBook(bookId){
		return this.cartEntities[bookId] ? this.cartEntities[bookId].count : 0;
	}

	ngOnChanges() {
	}

	ngOnInit() {
	}
}
