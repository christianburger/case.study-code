import { Injectable } from '@angular/core';
import { Launchpad } from '../model/launchpad.model';
import { LaunchpadApiService } from '../model/services/launchpad-api.service';
import { Observable, Subject } from 'rxjs';
import { DashboardLaunchpad } from '../model/dashboard-launchpad.model'; // Import the DashboardLaunchpad model

@Injectable()
export class DashboardViewModel {
  dashboardLaunchpads: DashboardLaunchpad[] = [];
  filteredLaunchpads: DashboardLaunchpad[] = []; 
  errorMessage?: string;

  private fetchCompleteSubject = new Subject<void>();

  constructor(private launchpadApiService: LaunchpadApiService) {}

  fetchLaunchpads(): Observable<void> {
    return new Observable<void>((observer) => {
      this.launchpadApiService.getLaunchpads().subscribe(
        (launchpads: Launchpad[]) => {
          this.dashboardLaunchpads= launchpads.map(launchpad => ({
            name: launchpad.name,
            fullName: launchpad.full_name,
            region: launchpad.region,
            wikipediaLink: `https://en.wikipedia.org/wiki/${launchpad.name.replace(/\s/g, '_')}`,
            launches: launchpad.launches
          }));
          this.filteredLaunchpads = this.dashboardLaunchpads.slice(); 
          this.fetchCompleteSubject.next(); 
          observer.next();
          observer.complete();
        },
        (error) => {
          this.errorMessage = 'Failed to load launchpads';
          console.error('Error loading launchpads:', error);
          this.fetchCompleteSubject.next(); 
          observer.error(error);
        }
      );
    });
  }

  filterLaunchpads(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredLaunchpads = this.dashboardLaunchpads.slice(); 
    } else {
      this.filteredLaunchpads = this.dashboardLaunchpads.filter(launchpad =>
        launchpad.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        launchpad.region.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}

