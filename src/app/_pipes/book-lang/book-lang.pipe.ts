import { Pipe, PipeTransform } from '@angular/core';

import { BookLanguage } from './../../_models/book';

@Pipe({
	name: 'bookLang'
})
export class BookLangPipe implements PipeTransform {
	transform(langValue: BookLanguage, args?: any): any {
		switch (langValue){
			case 1 : return 'rus';
			case 2 : return 'eng';
			default : throw new Error('BookLangPipe: lang not found for value "' + langValue + '"');
		}
	}
}