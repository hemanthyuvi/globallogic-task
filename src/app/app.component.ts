import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {CountrieslistService} from './Services/countrieslist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'globallogic-task';
  countriesDetails : any = {};
  showzones: boolean = false;
  displayDetails : any = {};
  @ViewChildren('tasknote') el: QueryList<ElementRef> | any;
  constructor(private _data: CountrieslistService){}

  ngOnInit(){
    // preparing the new json object to display at fronend based on receiving json object. 
    this._data.countriesData.values.forEach((country:any) => {
        this.countriesDetails = {
          name: country.name,
          zones: []
        };
        country.values[0].values.forEach((zone:any, i: number) => {
              this.countriesDetails.zones.push({
                zonename: zone.name,
                states: []
              });
            zone.values[0].values.forEach((state:any, j: number) => {
              this.countriesDetails.zones[i].states.push({
                name: state.name,
                population: ""
              });
              state.value.forEach((population:any) => {
                this.countriesDetails.zones[i].states[j].population = population.value
              });
            });
        });
    });
    // Arrange the states based on the alphabetical in ascending order.
    this.countriesDetails.zones.forEach((element:any, i:number) => {
      this.countriesDetails.zones[i].states.sort((a:any, b: any) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    });
  }

  statedetails(state:any){
    this.displayDetails = state;
  }

  expandzones() {
    this.showzones = !this.showzones;
  }

  expandall(){
    this.showzones = true;
    this.el.forEach((element:any) => {
      element.nativeElement.classList.add("active");
    });
  }

  collapseall(){
    this.showzones = false;
    this.displayDetails = {};
    this.el.forEach((element:any) => {
      element.nativeElement.classList.remove("active");
    });
  }

}
