import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [PaginationComponent, PaginationPipe],
	exports: [PaginationComponent, PaginationPipe],
	providers: []
})
export class NPaginationModule { }