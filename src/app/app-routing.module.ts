import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargoDetailsComponent } from './cargo-details/cargo-details.component';
import { CargoListComponent } from './cargo-list/cargo-list.component';
import { CargoFormComponent } from './cargo-form/cargo-form.component';


const routes: Routes = [
  { path: '', component: CargoFormComponent },
  { path: 'cargos/:cargoId', component: CargoDetailsComponent },
  { path: 'cargos', component: CargoListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
