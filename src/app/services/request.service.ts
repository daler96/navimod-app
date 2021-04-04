import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getCargos() {
    return this.http.get('https://navimod-api.herokuapp.com/cargos');
  }

}
