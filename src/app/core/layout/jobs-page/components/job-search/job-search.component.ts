import { Component, OnInit } from '@angular/core';
import { jobFilterInterface } from 'src/app/shared/interfaces/jobFilter.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-job-search',
	templateUrl: './job-search.component.html',
	styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit {
	jobTecnologies: any[] = [];
	jobSalaries: any[] = [];
	jobExpLevels: any[] = [];
	jobLocations: any[] = [];
	jobRemotes: any[] = [];
	jobFilters: jobFilterInterface = {
		title: '',
		technologies: 'all',
		salary: 'all',
		exp_level: 'all',
		location: 'all',
		remote: 'all',
	};
	change = false;

	constructor(private dataService: DataService) {}

	findUniques = (val: any) => [...new Set(val)];

	initializeSelectOptions() {
		const technologies: string[] = [];
		const salaries: Number[] = [];
		const exp_lvls: string[] = [];
		const locations: string[] = [];
		const remotes: string[] = [];

		this.dataService.getJobs().forEach((job) => {
			job.technologies.forEach((tech) => technologies.push(tech));
			salaries.push(job.salary.min);
			job.exp_level.forEach((exp) => exp_lvls.push(exp));
			locations.push(job.location);
			remotes.push(job.remote);
		});

		this.jobTecnologies = this.findUniques(technologies).sort();
		this.jobSalaries = this.findUniques(salaries);
		this.jobExpLevels = this.findUniques(exp_lvls).sort();
		this.jobLocations = this.findUniques(locations).sort();
		this.jobRemotes = this.findUniques(remotes);
	}

	ngOnInit(): void {
		this.dataService.jobListChange.subscribe(() => {
			this.initializeSelectOptions();
		});

		this.initializeSelectOptions();
	}

	checkSalaryValues = (val: Number) => {
		// console.log(this.dataService.checkSalaryCondition(val));

		return this.dataService.checkSalaryCondition(val);
	};

	displayResetBtn() {
		this.change = true;
	}

	reset() {
		for (let key in this.jobFilters) {
			this.jobFilters[key as keyof jobFilterInterface] = 'all';
		}

		this.jobFilters.title = '';
		this.filterJobs();
		this.change = false;
	}

	filterJobs() {
		this.dataService.filterJobs(this.jobFilters);
	}
}
