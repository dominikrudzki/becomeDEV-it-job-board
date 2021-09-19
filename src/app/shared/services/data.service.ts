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
			this.jobListiltered = this.jobList;
			this.jobListChange.next();
		}
	}

	getJobs() {
		return this.jobListiltered;
	}

	checkSalaryCondition = (salary: Number | String, value: String = 'num') => {
		if (value === 'num') {
			if (salary < 5000 || salary === '(1) < 5000') return '0';
			if (
				(salary >= 5000 && salary < 10000) ||
				salary === '(2) 5 000 - 10 000'
			)
				return '1';
			if (
				(salary >= 10000 && salary < 20000) ||
				salary === '(3) 10 000 - 20 000'
			)
				return '2';
			if (salary > 20000 || salary === '(4) > 20 000') return '3';
		}

		if (value === 'str') {
			if (salary < 5000) return '(1) < 5000';
			if (salary >= 5000 && salary < 10000) return '(2) 5 000 - 10 000';
			if (salary >= 10000 && salary < 20000) return '(3) 10 000 - 20 000';
			if (salary > 20000) return '(4) > 20 000';
		}

		return 'err';
	};

	filterJobs(
		jobFilters = {
			title: 'all',
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
					jobFilters[key as keyof jobFilterInterface] === '' ||
					(Array.isArray(job[key]) &&
						(<Array<string>>job[key]).includes(
							jobFilters[key as keyof jobFilterInterface]
						)) ||
					jobFilters[key as keyof jobFilterInterface] === job[key] ||
					jobFilters[key as keyof jobFilterInterface] ===
						this.checkSalaryCondition(job.salary.min)
			);
		});
		this.jobListiltered = jobListCopy;
		this.jobListChange.next();
	}
}
