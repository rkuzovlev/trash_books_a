import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Book } from './../../../_models/book';
import { iFilter } from './../../../_models/filter';

@Component({
	selector: 'store-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
	@Input() books: Book[]
	@Input() filter: iFilter;

	constructor() { }

	ngOnChanges() {
	}

	ngOnInit() {
	}
}
