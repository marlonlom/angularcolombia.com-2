import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/landing/landing.module#LandingModule'
  },
  {
    path: 'dashboard',
    loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'auth',
    loadChildren: 'src/app/auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
