import { BookLanguage } from './book';

export interface FilterRange {
	from: number;
	to: number;
}

export interface Filter {
	cost: FilterRange;
	date: FilterRange;
	rating: FilterRange;
	lang: BookLanguage;
}