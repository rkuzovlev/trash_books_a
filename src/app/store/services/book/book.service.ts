import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

import { ApiService } from './../../../_services/api/api.service';

import { Book } from './../../../_models/book';

@Injectable()
export class BookService {
	constructor(
		private api: ApiService
	) { }

	// fetch books from server
	fetch(): Observable<Book[]> {
		return this.api.get('/books.json').map((response: Response) => response.json() as Book[]);
	}
}
