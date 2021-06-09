import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountrieslistService {
  countriesData: any = {};
  constructor() {
    this.countriesData = {
      "name": "countries",
      "values": [
        {
          "name": "India",
          "values": [
            {
              "name": "zones",
              "values": [
                {
                  "name": "North",
                  "values": [
                    {
                      "name": "states",
                      "values": [
                        {
                          "name": "Punjab",
                          "value": [
                            {
                              "name": "population",
                              "value": "28000000"
                            }
                          ]
                        },
                        {
                              "name": "J&K",
                              "value": [
                                {
                                  "name": "population",
                                  "value": "1000000"
                                }
                              ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "South",
                  "values": [
                    {
                      "name": "states",
                      "values": [
                        {
                          "name": "Tamil nadu",
                          "value": [
                            {
                              "name": "population",
                              "value": "67000000"
                            }
                          ]
                        },
                        {
                              "name": "Kerala",
                              "value": [
                                {
                                  "name": "population",
                                  "value": "34000000"
                                }
                              ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
   }
}
