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

	constructor(private dataService: DataService) {}

	findUniques(val: any) {
		let unique = [...new Set(val)];

		return unique;
	}

	ngOnInit(): void {
		const technologies: string[] = [];
		const locations: string[] = [];
		// const

		this.dataService.getJobs().forEach((job) => {
			job.technologies.forEach((tech) => technologies.push(tech));

			locations.push(job.location);
		});
		// console.log(technologies);

		this.jobTecnologies = this.findUniques(technologies).sort();

		this.jobLocations = this.findUniques(locations).sort();
	}
}
