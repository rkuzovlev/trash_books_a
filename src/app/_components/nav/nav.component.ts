import { Component, OnInit, Input } from '@angular/core';
import { iCartEntities, iCartEntity } from './../../_models/cart';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
	@Input() cart: iCartEntity[];

	constructor() { }

	ngOnInit() {
	}

}
