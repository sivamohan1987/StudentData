import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
const apiURL = 'http://localhost:8090';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  result: any;
  constructor(private _http: HttpClient) { }
  getUsers() {
    return this._http.get(apiURL + '/users');
  }
  validateUser(username, password) {
    return this._http.post(apiURL + '/login', JSON.stringify({username: username, password: password}), httpOptions);
  }
  getUser(userId) {
    return this._http.get(apiURL + '/user/' + userId);
  }
  deleteUser(userId) {
    return this._http.delete(apiURL + '/user/' + userId);
  }
}
