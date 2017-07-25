import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookLangPipe } from './_pipes/book-lang/book-lang.pipe';
import { FillPipe } from './_pipes/fill/fill.pipe';
import { BookFilterPipe } from './_pipes/book-filter/book-filter.pipe';

@NgModule({
	declarations: [
		BookLangPipe,
		FillPipe,
		BookFilterPipe,
	],
	imports: [
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
    providers: [],
    exports: [BookLangPipe, FillPipe, BookFilterPipe]
})
export class SharedModule { }
