import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-job-search',
	templateUrl: './job-search.component.html',
	styleUrls: ['./job-search.component.scss'],
})
export class JobSearchComponent implements OnInit {
	jobLocations: any;

	constructor(private dataService: DataService) {}

	findUniques(val: any) {
		let unique = [...new Set(val)];

		return unique;
	}

	ngOnInit(): void {
		const locations: string[] = [];

		this.dataService.getJobs().forEach((job) => {
			locations.push(job.location);
		});

		this.jobLocations = this.findUniques(locations).sort();
	}
}
