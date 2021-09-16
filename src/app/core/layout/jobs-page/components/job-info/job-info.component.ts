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
	jobLoaded: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private DataService: DataService
	) {
		this.DataService.jobListChange.subscribe(() => {
			this.getRouteParams();
		});
	}

	setOverflow(val: string) {
		document.body.style.overflow = val;

		if (window.matchMedia('(max-width: 1200px)')) {
			document.body.style.overflow = 'unset';
		}
	}

	getRouteParams() {
		this.route.params.subscribe((params) => {
			this.jobInfo = this.DataService.jobList[params.id];
		});
	}

	ngOnInit(): void {
		this.setOverflow('hidden');

		this.getRouteParams();
	}

	ngOnDestroy(): void {
		this.setOverflow('unset');
	}
}
