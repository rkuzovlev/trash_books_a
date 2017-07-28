import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookLangPipe } from './_pipes/book-lang/book-lang.pipe';
import { FillPipe } from './_pipes/fill/fill.pipe';

@NgModule({
	declarations: [
		BookLangPipe,
		FillPipe,
	],
	imports: [
		HttpModule,
		FormsModule,
		ReactiveFormsModule
	],
    providers: [],
    exports: [BookLangPipe, FillPipe]
})
export class SharedModule { }
