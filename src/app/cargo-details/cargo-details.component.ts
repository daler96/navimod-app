import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { cargoDetailsFormat } from '../models/cargoDetailsFormat';
import { cargoListFormat } from '../models/cargoListFormat';
import { RequestService } from '../services/request.service';
// 

@Component({
  selector: 'app-cargo-details',
  templateUrl: './cargo-details.component.html',
  styleUrls: ['./cargo-details.component.css']
})
export class CargoDetailsComponent implements OnInit {

  ELEMENT_DATA: cargoListFormat[];
  displayedColumns: string[] = ['id', 'mode', 'movementType', 'incoterm', 'originCountry', 'originCity', 'destinationCountry', 'destinationCity', 'zipCode', 'packageType'];
  // @ts-ignore: Initialization is correct
  dataSource = new MatTableDataSource<cargoListFormat>(this.ELEMENT_DATA);

  private cargoId: any;
  constructor(private route: ActivatedRoute, private service: RequestService) { }

  passId: number;
  ngOnInit(): void {

    this.route.paramMap.subscribe((ParamMap) => {
      this.cargoId = ParamMap.get('cargoId');
      console.log(this.cargoId);
      this.passId = this.cargoId;

    });
    this.getCargoDetailInfo(this.passId);
  }

  cargoInfo;

  getCargoDetailInfo(passId) {
    let response = this.service.getCargoDetails(passId);
    response.subscribe((data: any[]) => {
      console.log(data[0]);
      this.cargoInfo = data[0];
    })

  }
}
