import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import the HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './view/dashboard/dashboard/dashboard.component';
import { LaunchpadDetailComponent } from './view/launchpad-detail/launchpad-detail/launchpad-detail.component';
import { EventCalendarComponent } from './view/event-calendar/event-calendar/event-calendar.component';
import { LaunchpadApiService } from './model/services/launchpad-api.service';
import { DashboardViewModel } from './viewmodel/dashboard.viewmodel'; // Import DashboardViewModel
import { MatCardModule } from '@angular/material/card';
import { PaginationComponent } from './view/components/pagination/pagination.component';
import { MatListModule } from '@angular/material/list';
import { FilterComponent } from './view/filter/filter.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LaunchpadDetailComponent,
    EventCalendarComponent,
    PaginationComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    FormsModule 
  ],
  providers: [
    LaunchpadApiService,
    DashboardViewModel // Add DashboardViewModel to providers array
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
