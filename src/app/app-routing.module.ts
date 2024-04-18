import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard/dashboard.component';
import { LaunchpadDetailComponent } from './view/launchpad-detail/launchpad-detail/launchpad-detail.component';
import { EventCalendarComponent } from './view/event-calendar/event-calendar/event-calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'launchpad-detail/:id', component: LaunchpadDetailComponent },
  { path: 'event-calendar', component: EventCalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
