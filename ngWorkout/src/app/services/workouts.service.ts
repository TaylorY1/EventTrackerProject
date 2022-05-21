import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Workout } from '../models/workout';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  private baseUrl = 'http://localhost:8082/';
  private url = this.baseUrl + 'api';
  workouts: Workout[] = [];

  constructor(private http: HttpClient) {}

  index(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.url + "/index").pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
  create(workout: Workout) {
    return this.http.post<Workout>((this.url + "/workout"), workout).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
    );
  }
}
