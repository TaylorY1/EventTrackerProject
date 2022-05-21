import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  private url = environment.baseUrl + 'api/index';

  constructor(
    private http: HttpClient,
  ) { }
}
