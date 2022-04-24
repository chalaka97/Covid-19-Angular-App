import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private http:HttpClient) { }

  getCovidData(){
    return this.http.get("https://www.hpb.health.gov.lk/api/get-current-statistical")
  }
}
