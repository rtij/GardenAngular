import { Pipe, PipeTransform } from '@angular/core';
import { Client } from './Object/Client';

@Pipe({
  name: 'clientFilter'
})
export class ClientFilterPipe implements PipeTransform {


  transform(Client: Client[],ClientSearch:string): Client[] {
    if(!Client || !ClientSearch){
      return Client;
    }
    return Client.filter(Client =>
      Client.nomcl.toString().toLocaleLowerCase().includes(ClientSearch.toLocaleLowerCase()) ||
      Client.telcl.toString().toLocaleLowerCase().includes(ClientSearch.toLocaleLowerCase()) ||
      Client.adrcl.toString().toLocaleLowerCase().includes(ClientSearch.toLocaleLowerCase())
      );
  }
}
