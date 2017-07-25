import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'store-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
	@Input() rating: number;
	star: number = 0;
	halfStar: boolean = false;
	noStar: number = 0;

	constructor() {
		
	}

	ngOnInit() {
		this.star = Math.trunc(this.rating);

		let d = this.rating - this.star;

		this.halfStar = d >= 0.5 ? true : false;
		this.noStar = Math.trunc(5 - this.rating) + (this.halfStar ? 0 : 1);
	}

}
