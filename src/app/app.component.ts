import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CovidDataService} from "./covid-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'Covid19App';
  coviddata : any //variable

  constructor(private covidService: CovidDataService) {
    this.covidService.getCovidData().subscribe((response)=>{
      console.warn("data",response)
      //constructor eke return type karanne na
      // wena function ekakanm return type karanwa
      this.coviddata = response;
    })
  }
  ngOnInit():void {

  }
}
