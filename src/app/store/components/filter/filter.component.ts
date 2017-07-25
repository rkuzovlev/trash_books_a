import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Filter } from './../../../_models/filter';
import { BookLanguage } from './../../../_models/book';

const MAX_COST = 10;
const MAX_DATE = 2020;
const MIN_DATE = 1970;

@Component({
	selector: 'store-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
	@Input() filter: Filter;
	@Output() changed = new EventEmitter();

	filterForm: FormGroup

	constructor() {
		this.filterForm = new FormGroup({
			costFrom:  new FormControl(),
			costTo:  new FormControl(),
			ratingFrom:  new FormControl(),
			ratingTo:  new FormControl(),
			dateFrom:  new FormControl(),
			dateTo:  new FormControl(),
			lang:  new FormControl()
		});
	}

	getNewFilterValue(): Filter {
		let val = this.filterForm.value;
		let newFilter: Filter = {
			cost: { from: val.costFrom, to: val.costTo },
			date: { from: val.dateFrom, to: val.dateTo },
			rating: { from: val.ratingFrom, to: val.ratingTo },
			lang: val.lang
		};

		return newFilter;
	}

	fieldIsChanged() {
		let newFilter = this.getNewFilterValue();
		this.changed.emit(newFilter);
	}

	ngOnChanges() {
		this.filterForm.setControl('costFrom', new FormControl(this.filter.cost.from, [Validators.min(0), Validators.max(this.filter.cost.to)]));
		this.filterForm.setControl('costTo', new FormControl(this.filter.cost.to, [Validators.min(this.filter.cost.from), Validators.max(MAX_COST)]));
		this.filterForm.setControl('ratingFrom', new FormControl(this.filter.rating.from, [Validators.min(0), Validators.max(this.filter.rating.to)]));
		this.filterForm.setControl('ratingTo', new FormControl(this.filter.rating.to, [Validators.min(this.filter.rating.from), Validators.max(5)]));
		this.filterForm.setControl('dateFrom', new FormControl(this.filter.date.from, [Validators.min(MIN_DATE), Validators.max(this.filter.date.to)]));
		this.filterForm.setControl('dateTo', new FormControl(this.filter.date.to, [Validators.min(this.filter.date.from), Validators.max(MAX_DATE)]));
		this.filterForm.setControl('lang', new FormControl(this.filter.lang, []));
	}

	ngOnInit() {}
}