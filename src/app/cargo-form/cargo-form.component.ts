import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-cargo-form',
  templateUrl: './cargo-form.component.html',
  styleUrls: ['./cargo-form.component.css']
})
export class CargoFormComponent implements OnInit {


  ngOnInit() {
  }

  constructor(public service: FormService, private reqService: RequestService) { }

  modes = [
    { id: 1, value: 'LCL' },
    { id: 2, value: 'FCL' },
    { id: 3, value: 'Air' }
  ]

  movementTypes = [
    { id: 1, value: 'Door to Door' },
    { id: 2, value: 'Port to Door' },
    { id: 3, value: 'Door to Port' },
    { id: 4, value: 'Port to Port' },
  ]

  incoterms = [
    { id: 1, value: 'Delivered Duty Paid' },
    { id: 2, value: 'Delivered At Place' }
  ]

  //countries: string[] = ['USA', 'China', 'Turkey'];

  countries = [
    { id: 1, value: 'USA' },
    { id: 2, value: 'China' },
    { id: 3, value: 'Turkey' }
  ]

  //cities: string[] = ['New York', 'Los Angeles', 'Miami', 'Minnesota', 'Beijing', 'Shanghai', 'Istanbul', 'Izmir'];

  cities = [
    { id: 1, value: 'New York' },
    { id: 2, value: 'Los Angeles' },
    { id: 3, value: 'Miami' },
    { id: 4, value: 'Minnesota' },
    { id: 5, value: 'Beijing' },
    { id: 6, value: 'Shanghai' },
    { id: 7, value: 'Istanbul' },
    { id: 8, value: 'Izmir' },
  ]

  packages: string[] = ['Pallets', 'Boxes', 'Cartons'];

  Vunits: string[] = ['CM', 'IN'];

  Wunits: string[] = ['KG', 'LB'];

  currencies: string[] = ['USD – US Dollar', 'CNY – Chinese Yuan', 'TRY – Turkish Lira'];


  POST_DATA = {}
  onSubmit() {

    this.POST_DATA = {
      mode: this.service.form.controls.originCity.value,
      movementType: this.service.form.controls.movementType.value,
      incoterm: this.service.form.controls.incoterm.value,
      originCountry: this.service.form.controls.originCountry.value,
      originCity: this.service.form.controls.originCity.value,
      destinationCountry: this.service.form.controls.destinationCountry.value,
      destinationCity: this.service.form.controls.destinationCity.value,
      zipCode: this.service.form.controls.zipCode.value,
      packageType: this.service.form.controls.packageType.value,
      quantity: this.service.form.controls.quantity.value,
      volume: this.service.form.controls.volume.value,
      volumeUnit: this.service.form.controls.volumeUnit.value,
      weight: this.service.form.controls.weight.value,
      weightUnit: this.service.form.controls.weightUnit.value,
      cargoDescription: this.service.form.controls.cargoDescription.value,
      currency: this.service.form.controls.currency.value,
      hazardousMaterial: this.service.form.controls.hazardousMaterial.value,
      eventCargo: this.service.form.controls.eventCargo.value,
      personalGoods: this.service.form.controls.personalGoods.value
    }


    let response = this.reqService.createCargo(this.POST_DATA);
    response.subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }








}
