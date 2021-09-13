import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginPageComponent } from './core/layout/login-page/login-page.component';
import { JobsPageComponent } from './core/layout/jobs-page/jobs-page.component';
import { JobSearchComponent } from './core/layout/jobs-page/components/job-search/job-search.component';
import { JobComponent } from './core/layout/jobs-page/components/job/job.component';
import { JobInfoComponent } from './core/layout/jobs-page/components/job-info/job-info.component';
import { CheckValuePipe } from './shared/pipes/check-value.pipe';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		LoginPageComponent,
		JobsPageComponent,
		JobSearchComponent,
		JobComponent,
		JobInfoComponent,
		CheckValuePipe,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
