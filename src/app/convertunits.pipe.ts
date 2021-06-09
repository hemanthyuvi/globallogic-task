import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertunits'
})
export class ConvertunitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let finalvalue = "";
    if(typeof(value) != "undefined"){
      if(value >= 10000000){
        finalvalue = value + " Cr";
      }else{
        finalvalue = value + " Lacs";
      }
    }
    return finalvalue;
  }

}
