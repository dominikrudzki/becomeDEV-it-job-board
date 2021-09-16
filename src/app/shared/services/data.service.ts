import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { jobInterface } from '../interfaces/job.interface';
import { jobFilterInterface } from '../interfaces/jobFilter.interface';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	jobList: Array<jobInterface> = [];
	jobListiltered: Array<jobInterface> = [];
	jobListChange: Subject<any> = new Subject<any>();

	constructor() {
		this.initializeData();
	}

	async initializeData() {
		const fetchResponse = await fetch('/assets/jobs.json', {
			headers: { Accept: 'application/json' },
		});
		if (fetchResponse.ok) {
			this.jobList = await fetchResponse.json();
			this.jobListChange.next();
		}
	}

	getJobs() {
		// this.jobListChange.subscribe(() => {
		// 	console.log('change');
		// 	return this.jobList;
		// });
		return this.jobList;
	}

	filterJobs(
		jobFilters = {
			technologies: 'all',
			salary: 'all',
			exp_level: 'all',
			location: 'all',
			remote: 'all',
		}
	) {
		let jobListCopy = [...this.jobList];

		(Object.keys(jobFilters) as (keyof jobInterface)[]).forEach((key) => {
			jobListCopy = jobListCopy.filter(
				(job) =>
					jobFilters[key as keyof jobFilterInterface] === 'all' ||
					(Array.isArray(job[key]) &&
						(<Array<string>>job[key]).includes(
							jobFilters[key as keyof jobFilterInterface]
						)) ||
					jobFilters[key as keyof jobFilterInterface] === job[key]
			);
		});
		this.jobListiltered = jobListCopy;
		console.log(jobListCopy);
	}
}
