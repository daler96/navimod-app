import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    mode: new FormControl(''),
    movementType: new FormControl(''),
    incoterm: new FormControl(''),
    originCountry: new FormControl(''),
    originCity: new FormControl(''),
    destinationCountry: new FormControl(''),
    destinationCity: new FormControl(''),
    zipCode: new FormControl(''),
    packageType: new FormControl(''),
    quantity: new FormControl(''),
    volume: new FormControl(''),
    volumeUnit: new FormControl(''),
    weight: new FormControl(''),
    weightUnit: new FormControl(''),
    cargoDescription: new FormControl(''),
    currency: new FormControl(''),
    hazardousMaterial: new FormControl('false'),
    eventCargo: new FormControl('false'),
    personalGoods: new FormControl('false')


  });

}
