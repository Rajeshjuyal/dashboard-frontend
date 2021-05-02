import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  postUser(body) {
    const token = JSON.parse(localStorage.getItem('login')).token;
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http.post(environment.apiEndPoint + 'users/register', body, {
      headers: headers,
    });
  }

  getUserbyId(_id) {
    const token = JSON.parse(localStorage.getItem('login')).token;
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http.get(environment.apiEndPoint + 'users/getbyId/' + _id, {
      headers: headers,
    });
  }

  postLogin(body) {
    return this.http.post(environment.apiEndPoint + 'users/login', body);
  }
  postRegister(body) {
    return this.http.post(environment.apiEndPoint + 'users/Register', body);
  }
  onDeleteSingleDataUser(_id) {
    const token = JSON.parse(localStorage.getItem('login')).token;
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http.delete(environment.apiEndPoint + 'users/' + _id, {
      headers: headers,
    });
  }
}
