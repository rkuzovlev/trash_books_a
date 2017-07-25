import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Filter } from './../../../_models/filter';

const MAX_COST = 10;
const MAX_DATE = 2020;

@Component({
	selector: 'store-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnChanges {
	@Input() filter: Filter;
	@Output() changed = new EventEmitter();

	filterForm: FormGroup

	constructor(
		private fb: FormBuilder
	) {
		this.filterForm = this.fb.group({
			costFrom: ['', []],
			costTo: ['', []],
			ratingFrom: ['', []],
			ratingTo: ['', []],
			dateFrom: ['', []],
			dateTo: ['', []],
			lang: ['', []]
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
		let costFrom = (this.filterForm.controls['costFrom'] as FormControl);
		let costTo = (this.filterForm.controls['costTo'] as FormControl);
		let ratingFrom = (this.filterForm.controls['ratingFrom'] as FormControl);
		let ratingTo = (this.filterForm.controls['ratingTo'] as FormControl);
		let dateFrom = (this.filterForm.controls['dateFrom'] as FormControl);
		let dateTo = (this.filterForm.controls['dateTo'] as FormControl);
		let lang = (this.filterForm.controls['lang'] as FormControl);

		costFrom.setValue(this.filter.cost.from);
		costFrom.setValidators([Validators.min(0), Validators.max(this.filter.cost.to)]);
		costTo.setValue(this.filter.cost.to);
		costTo.setValidators([Validators.min(this.filter.cost.from), Validators.max(MAX_COST)]);

		ratingFrom.setValue(this.filter.rating.from);
		ratingFrom.setValidators([Validators.min(0), Validators.max(this.filter.rating.to)]);
		ratingTo.setValue(this.filter.rating.to);
		ratingTo.setValidators([Validators.min(this.filter.rating.from), Validators.max(5)]);

		dateFrom.setValue(this.filter.date.from);
		dateFrom.setValidators([Validators.min(1970), Validators.max(this.filter.date.to)]);
		dateTo.setValue(this.filter.date.to);
		dateTo.setValidators([Validators.min(this.filter.date.from), Validators.max(MAX_DATE)]);

		lang.setValue(this.filter.lang);
	}

	ngOnInit() {}
}