import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobInfoComponent } from './core/layout/jobs-page/components/job-info/job-info.component';
import { JobsPageComponent } from './core/layout/jobs-page/jobs-page.component';
import { LoginPageComponent } from './core/layout/login-page/login-page.component';

const routes: Routes = [
	{
		path: '',
		component: JobsPageComponent,
		children: [
			{
				path: 'job-offer',
				redirectTo: 'job-offer/1',
			},
			{
				path: 'job-offer/:id',
				component: JobInfoComponent,
			},
		],
	},
	{ path: 'login', component: LoginPageComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
