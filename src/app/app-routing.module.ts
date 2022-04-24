import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalCovidComponent} from "./global-covid/global-covid.component";
import {SlCovidComponent} from "./sl-covid/sl-covid.component";

const routes: Routes = [
  {
    component:SlCovidComponent,
    path:''
  },
  {
    component:GlobalCovidComponent,
    path:'global'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
