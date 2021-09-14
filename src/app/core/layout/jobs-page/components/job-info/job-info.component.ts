import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jobInterface } from 'src/app/shared/interfaces/job.interface';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
	selector: 'app-job-info',
	templateUrl: './job-info.component.html',
	styleUrls: ['./job-info.component.scss'],
})
export class JobInfoComponent implements OnInit {
	jobInfo!: jobInterface;

	constructor(
		private route: ActivatedRoute,
		private DataService: DataService
	) {
		this.route.params.subscribe((params) => {
			this.jobInfo = this.DataService.getJobById(params.id);
		});
	}

	setOverflow(val: string) {
		document.body.style.overflow = val;

		if (window.matchMedia('(max-width: 1200px)')) {
			// document.body.style.overflow = 'unset';
		}
	}

	ngOnInit(): void {
		// this.setOverflow('hidden');
	}

	ngOnDestroy(): void {
		// this.setOverflow('unset');
	}
}
