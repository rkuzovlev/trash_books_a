import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'fill'
})
export class FillPipe implements PipeTransform {

	transform(length: number, args?: any): any {
		let a = (new Array(length)).fill(1);
		return a;
	}

}
