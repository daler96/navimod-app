import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

let header = new HttpHeaders();
header.set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  public getCargos() {
    return this.http.get('https://navimod-api.herokuapp.com/cargos');
  }

  public getCargoDetails(cargoId) {
    let route = 'https://navimod-api.herokuapp.com/cargos/'
    return this.http.get(route + cargoId);
  }


  public createCargo(postData) {
    let route = 'https://navimod-api.herokuapp.com/addNewCargo';
    return this.http.post(route, postData);
  }

}
