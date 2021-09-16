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
	jobLocations: any[] = [];
	jobFilters: jobFilterInterface = {
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
		const locations: string[] = [];

		this.dataService.getJobs().forEach((job) => {
			job.technologies.forEach((tech) => technologies.push(tech));
			locations.push(job.location);
		});

		this.jobTecnologies = this.findUniques(technologies).sort();
		this.jobLocations = this.findUniques(locations).sort();
	}

	ngOnInit(): void {
		this.dataService.jobListChange.subscribe(() => {
			this.initializeSelectOptions();
		});

		this.initializeSelectOptions();
	}

	displayResetBtn() {
		this.change = true;
	}

	reset() {
		for (let key in this.jobFilters) {
			this.jobFilters[key as keyof jobFilterInterface] = 'all';
		}
		this.change = false;
	}

	filterJobs() {
		this.dataService.filterJobs(this.jobFilters);
	}
}
