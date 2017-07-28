import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'NPagination'
})
export class PaginationPipe implements PipeTransform {
	transform(values: any, args?: any): any {
		if (!Array.isArray(values)){
			console.warn('[n-pagination pipe] pagination value is not array');
			return values;
		}

		if (!args || args.page == undefined || !args.itemsOnPage == undefined) {
			console.warn('[n-pagination pipe] arguments is not set');
			return values;
		}

		return values.slice((args.page - 1) * args.itemsOnPage,  args.page * args.itemsOnPage);
	}
}
