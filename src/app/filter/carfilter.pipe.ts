import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../Object/Car';

@Pipe({
  name: 'carfilter'
})
export class CarfilterPipe implements PipeTransform {

  transform(Car: Car[],CarSearch:string): Car[] {
    if(!Car || !CarSearch){
      return Car;
    }
    return Car.filter(Car =>
      Car.nomv.toString().toLocaleLowerCase().includes(CarSearch.toLocaleLowerCase()) ||
      Car.matrc.toString().toLocaleLowerCase().includes(CarSearch.toLocaleLowerCase()) ||
      Car.idclient.nomcl.toString().toLocaleLowerCase().includes(CarSearch.toLocaleLowerCase())
      );
  }


}
