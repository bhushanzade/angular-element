import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  saveContact(data: Object): Observable<any> {
    const url = 'http://localhost:5000/contacts';
    return this.http.post(url, data);
  }

  getContacts(): Observable<any> {
    const url = 'http://localhost:5000/contacts';
    return this.http.get(url);
  }

}
