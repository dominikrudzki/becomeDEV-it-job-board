import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	jobList = [
		{
			id: 1,
			title: 'Angular Developer',
			company: 'ACME',
			location: 'Poland',
			technologies: ['nodejs', 'angular', 'blockchain'],
			salary: '13 000 - 16 000 PLN',
			remote: 'partly remote',
			languages: ['polish, english'],
			contact: 'email@email.com',
			exp_level: ['mid', 'senior'],
			add_date: '12.10.2021',
		},
		{
			id: 2,
			title: 'React Developer',
			company: 'ACME2',
			location: 'France',
			technologies: ['react', 'scss', 'webpack'],
			salary: '3 000 - 7 200 PLN',
			remote: 'partly remote',
			languages: ['polish, english'],
			contact: 'email@email.com',
			exp_level: ['junior'],
			add_date: '05.10.2021',
		},
		{
			id: 3,
			title: 'Java Developer',
			company: 'ACME3',
			location: 'Germany',
			technologies: ['react', 'scss', 'webpack'],
			salary: '3 000 - 7 200 PLN',
			remote: 'partly remote',
			languages: ['polish, english'],
			contact: 'email@email.com',
			exp_level: ['junior'],
			add_date: '05.10.2021',
		},
		{
			id: 4,
			title: 'NodeJs Developer',
			company: 'ACME4',
			location: 'United States',
			technologies: ['react', 'scss', 'webpack'],
			salary: '3 000 - 7 200 PLN',
			remote: 'partly remote',
			languages: ['polish, english'],
			contact: 'email@email.com',
			exp_level: ['junior'],
			add_date: '05.10.2021',
		},
	];

	constructor() {}

	getJobs() {
		return this.jobList;
	}
}
