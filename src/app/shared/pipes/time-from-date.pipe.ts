import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'timeFromDate',
})
export class TimeFromDatePipe implements PipeTransform {
	transform(value: Date): any {
		const jobDate = new Date(value),
			currentDate = new Date(),
			diffInTDays = Math.round(
				(currentDate.getTime() - jobDate.getTime()) /
					(1000 * 60 * 60 * 24)
			);

		let msg;

		switch (diffInTDays) {
			case 0:
				msg = 'new';
				break;
			case 1:
				msg = 'yesterday';
				break;
			default:
				msg = diffInTDays + ' days ago';
				break;
		}
		if (diffInTDays > 30) msg = '30+ days ago';

		return msg;
	}
}
