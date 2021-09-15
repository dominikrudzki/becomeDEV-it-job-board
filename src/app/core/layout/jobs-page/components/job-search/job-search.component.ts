import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-job-search',
	templateUrl: './job-search.component.html',
	styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit {
	jobTecnologies: any[] = [];
	jobLocations: any[] = [];

	jobFilters = {
		tech: 'all',
		salary: 'all',
		exp_lvl: 'all',
		location: 'all',
		remote: 'all',
	};

	constructor(private dataService: DataService) {}

	findUniques = (val: any) => [...new Set(val)];

	ngOnInit(): void {
		const technologies: string[] = [];
		const locations: string[] = [];

		this.dataService.getJobs().forEach((job) => {
			job.technologies.forEach((tech) => technologies.push(tech));
			locations.push(job.location);
		});

		this.jobTecnologies = this.findUniques(technologies).sort();
		this.jobLocations = this.findUniques(locations).sort();
	}

	filterJobs() {
		this.dataService.filterJobs(this.jobFilters);
	}
}
