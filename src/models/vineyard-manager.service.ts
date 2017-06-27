import {Injectable} from '@angular/core';
import {Vineyard} from './vineyard';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VineyardManagerService  {
  current: Vineyard;
  vineyardPromise: Promise<Vineyard[]>;
  vineyardList: Vineyard[];

  constructor( private client: Http) {
    this.current = new Vineyard('Chargement en cours', 'Patientez');
    this.vineyardList = [];
    this.callAPI();
  }

  callAPI() {

    this.vineyardPromise = this.client.get('assets/list.json')
      .toPromise()
      .then((response) =>
        this.vineyardList = response.json().payload.map(
          vineyardData => Object.assign(new Vineyard(), vineyardData)
        ) as Vineyard[]
      )
      .catch( error => { console.log(error) });
  }

  add(newVineyard: Vineyard) {
    this.vineyardList.push(newVineyard);
  }
}
