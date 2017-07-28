import { Component, OnInit, OnChanges, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
	selector: 'n-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() id: string = "default";
	@Input() page: number;
	@Input() itemsOnPage: number = 9;
	@Input() totalItems: number;
	@Input() items: object;
	@Input() countPageButtons: number = 5;
	@Input() showNextPrev: boolean = true;
	@Input() showFirstLast: boolean = true;
	@Input() autoHide: boolean = true;

	@Output() pageChanged: EventEmitter<number> = new EventEmitter();

	pages: number = 0;
	hide: boolean = false;
	start: number = 1;
	end: number = 1;
	pageButtons: number[] = [];

	constructor() { }

	ngOnChanges() {
		if (Array.isArray(this.items)){
			this.totalItems = this.items.length;
		}

		if (this.totalItems < 0){
			this.totalItems = 0;
		}

		if (this.totalItems == 0){
			this.page = 1;
			this.pages = 1;
			this.hide = true;
			this.start = 1;
			this.end = 1;
			this.pageButtons = [1];
			return;
		}

		if (this.itemsOnPage < 1) {
			this.itemsOnPage = 9;
		}

		if (this.countPageButtons < 1){
			this.countPageButtons = 5;
		}
		
		this.pages = Math.ceil(this.totalItems / this.itemsOnPage);
		
		if (this.page < 1) {
			this.page = 1;
		} else if (this.page > this.pages) {
			this.page = this.pages;
		}

		this.hide = this.pages <= 1 ? true : false;

		this.start = this.page - Math.trunc(this.countPageButtons / 2);
		if (this.start < 1) {
			this.start = 1;
		}

		this.end = this.start + this.countPageButtons - 1;
		if (this.end > this.pages){
			this.start = this.start - (this.end - this.pages);
			this.end = this.pages;
			if (this.start < 1) {
				this.start = 1;
			}
		}

		this.pageButtons = [];
		for (let i = this.start; i <= this.end; i++){
			this.pageButtons.push(i);
		}

		// let pagination = this.paginationService.getPagination(this.id);
		// pagination.itemsOnPage = this.itemsOnPage;
		// pagination.page = this.page;
	}

	onPageChange(newPage) {
		this.pageChanged.emit(newPage);
	}

	ngOnInit() {
	}
}
