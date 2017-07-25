import { Component, OnInit, Input } from '@angular/core';

import { Book } from './../../../_models/book'

@Component({
	selector: 'store-book',
	templateUrl: './book.component.html',
	styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
	@Input() book: Book;

	constructor() { }

	ngOnInit() {
	}
}
