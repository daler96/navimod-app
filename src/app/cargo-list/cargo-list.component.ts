import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RequestService } from '../services/request.service';
import { cargoListFormat } from '../models/cargoListFormat';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-cargo-list',
  templateUrl: './cargo-list.component.html',
  styleUrls: ['./cargo-list.component.css']
})
export class CargoListComponent implements OnInit {

  ELEMENT_DATA: cargoListFormat[];
  displayedColumns: string[] = ['id', 'mode', 'movementType', 'incoterm', 'originCountry', 'originCity', 'destinationCountry', 'destinationCity', 'zipCode', 'packageType'];
  // @ts-ignore: Initialization is correct
  dataSource = new MatTableDataSource<cargoListFormat>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private service: RequestService) { }



  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllCargos();
  }

  public getAllCargos() {
    let response = this.service.getCargos();
    response.subscribe(cargo => this.dataSource.data = cargo as cargoListFormat[]);
  }

}
