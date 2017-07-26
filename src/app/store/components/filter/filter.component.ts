import { Component, ChangeDetectionStrategy, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Filter } from './../../../_models/filter';
import { BookLanguage } from './../../../_models/book';
import { filterValidator } from './../../../_validators/filter-range/filter-range.validator';

const MAX_COST = 10;
const MAX_DATE = 2020;
const MIN_DATE = 1970;

@Component({
	selector: 'store-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnChanges {
	@Input() filter: Filter;
	@Output() changed = new EventEmitter();

	filterForm: FormGroup

	constructor() {
		this.filterForm = new FormGroup({
			costFrom: new FormControl(0, [Validators.min(0), Validators.max(MAX_COST)]),
			costTo: new FormControl(MAX_COST, [Validators.min(0), Validators.max(MAX_COST)]),
			ratingFrom: new FormControl(0, [Validators.min(0), Validators.max(5)]),
			ratingTo: new FormControl(5, [Validators.min(0), Validators.max(5)]),
			dateFrom: new FormControl(MIN_DATE, [Validators.min(MIN_DATE), Validators.max(MAX_DATE)]),
			dateTo: new FormControl(MAX_DATE, [Validators.min(MIN_DATE), Validators.max(MAX_DATE)]),
			lang: new FormControl(BookLanguage.All)
		}, filterValidator());
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
		
		if (this.filterForm.valid){
			this.changed.emit(newFilter);
		}
	}

	ngOnChanges() {
		this.filterForm.setValue({
			'costFrom': this.filter.cost.from,
			'costTo': this.filter.cost.to,
			'ratingFrom': this.filter.rating.from,
			'ratingTo': this.filter.rating.to,
			'dateFrom': this.filter.date.from,
			'dateTo': this.filter.date.to,
			'lang': this.filter.lang
		});
	}

	ngOnInit() {}
}