import { Pipe, PipeTransform } from '@angular/core';

import { Book, BookLanguage } from './../../_models/book';
import { iFilter } from './../../_models/filter';

export let bookFilter = function(book: Book, filter: iFilter): boolean {
	let year = (new Date(book.date)).getFullYear();

	if (book.cost >= filter.cost.from &&
		book.cost <= filter.cost.to &&
		
		book.rating >= filter.rating.from &&
		book.rating <= filter.rating.to &&
		
		year >= filter.date.from &&
		year <= filter.date.to &&

		(filter.lang == BookLanguage.All || book.lang == filter.lang)
	) {
		return true;
	}

	return false;
}

@Pipe({
	name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {
	transform(books: Book[], filter: iFilter): any {
		return books.filter(book => bookFilter(book, filter));
	}
}
