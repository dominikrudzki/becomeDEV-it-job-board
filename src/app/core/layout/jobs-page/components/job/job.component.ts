import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-job',
	templateUrl: './job.component.html',
	styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
	@Input() job: any;

	constructor() {}

	ngOnInit(): void {}
}
