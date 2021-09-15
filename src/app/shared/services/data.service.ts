import { Injectable } from '@angular/core';
import { jobInterface } from '../interfaces/job.interface';
import { jobFilterInterface } from '../interfaces/jobFilter.interface';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	jobList: Array<jobInterface> = [];

	constructor() {
		this.initializeData();
	}

	async initializeData() {
		const fetchResponse = await fetch('/assets/jobs.json', {
			headers: { Accept: 'application/json' },
		});
		if (fetchResponse.ok) {
			this.jobList = await fetchResponse.json();
		}
	}

	getJobs() {
		return this.jobList;
	}

	getJobById(id: number) {
		return this.jobList[id];
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
		this.jobList = jobListCopy;
		console.log(jobListCopy);
	}
}
