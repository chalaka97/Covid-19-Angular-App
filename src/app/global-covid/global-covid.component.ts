import { Component, OnInit } from '@angular/core';
import {CovidDataService} from "../covid-data.service";

@Component({
  selector: 'app-global-covid',
  templateUrl: './global-covid.component.html',
  styleUrls: ['./global-covid.component.css']
})
export class GlobalCovidComponent implements OnInit {

  covidData:any;
  constructor(private covidService:CovidDataService) {
    this.covidService.getCovidData().subscribe((response)=>{
      this.covidData = response;
    })
  }

  ngOnInit(): void {
  }

}
