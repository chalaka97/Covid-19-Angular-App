import { Component, OnInit } from '@angular/core';
import {CovidDataService} from "../covid-data.service";

@Component({
  selector: 'app-sl-covid',
  templateUrl: './sl-covid.component.html',
  styleUrls: ['./sl-covid.component.css']
})
export class SlCovidComponent implements OnInit {

  covidData:any
  constructor(private covidService: CovidDataService) {
    this.covidService.getCovidData().subscribe((response)=>{
      this.covidData = response;
    })
  }
  ngOnInit(): void {
  }

}
