import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from './../../_models/book';
import { Filter } from './../../_models/filter';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
	@Input() books: Book[]
	@Input() filter: Filter[]
	@Output() filterChanged = new EventEmitter();
	
	constructor() { }

	ngOnInit() {
	}
}
