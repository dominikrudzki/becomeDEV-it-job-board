import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-jobs-page',
	templateUrl: './jobs-page.component.html',
	styleUrls: ['./jobs-page.component.scss'],
})
export class JobsPageComponent implements OnInit {
	jobs!: any;

	constructor(private DataService: DataService) {
		this.jobs = this.DataService.getJobs();
	}

	ngOnInit(): void {}
}
