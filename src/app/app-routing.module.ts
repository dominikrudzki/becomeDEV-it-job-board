import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './core/layout/jobs-page/jobs-page.component';
import { LoginPageComponent } from './core/layout/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: JobsPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
