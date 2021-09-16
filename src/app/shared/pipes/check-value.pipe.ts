import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'checkValue',
})
export class CheckValuePipe implements PipeTransform {
	transform(value: unknown): unknown {
		return value ? 'yes' : 'no';
	}
}
