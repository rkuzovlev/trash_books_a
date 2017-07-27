import { BookLanguage } from './book';

export interface iFilterRange {
	from: number;
	to: number;
}

export interface iFilter {
	cost: iFilterRange;
	date: iFilterRange;
	rating: iFilterRange;
	lang: BookLanguage;
}