import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlateauService {

  constructor(private http: HttpClient) {
  }

  getBoxes(): Observable<any> {
    // return this.http.get('http://localhost:3000/boxes');
    return this.http.get('assets/boxes.json');
  }
}
