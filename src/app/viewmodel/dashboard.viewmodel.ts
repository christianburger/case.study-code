import { Injectable } from '@angular/core';
import { Launchpad } from '../model/launchpad.model';
import { LaunchpadApiService } from '../model/services/launchpad-api.service';
import { Observable, Subject } from 'rxjs';
import { DashboardLaunchpad } from '../model/dashboard-launchpad.model'; // Import the DashboardLaunchpad model

@Injectable()
export class DashboardViewModel {
  launchpads: DashboardLaunchpad[] = [];
  errorMessage?: string;

  private fetchCompleteSubject = new Subject<void>();

  constructor(private launchpadApiService: LaunchpadApiService) {}

  fetchLaunchpads(): Observable<void> {
    return new Observable<void>((observer) => {
      this.launchpadApiService.getLaunchpads().subscribe(
        (launchpads: Launchpad[]) => {
          this.launchpads = launchpads.map(launchpad => ({
            name: launchpad.name,
            fullName: launchpad.full_name,
            region: launchpad.region,
            wikipediaLink: `https://en.wikipedia.org/wiki/${launchpad.name.replace(/\s/g, '_')}`,
            launches: launchpad.launches
          }));
          this.fetchCompleteSubject.next(); // Emit that the fetch operation is complete
          observer.next();
          observer.complete();
        },
        (error) => {
          this.errorMessage = 'Failed to load launchpads';
          console.error('Error loading launchpads:', error);
          this.fetchCompleteSubject.next(); // Emit that the fetch operation is complete, even if it failed
          observer.error(error);
        }
      );
    });
  }
}
