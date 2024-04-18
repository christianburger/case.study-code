import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launchpad } from '../launchpad.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadApiService {
  private apiUrl = 'https://api.spacexdata.com/v4/launchpads';

  constructor(private http: HttpClient) {}

  getLaunchpads(): Observable<Launchpad[]> {
    return this.http.get<Launchpad[]>(this.apiUrl);
  }
}
