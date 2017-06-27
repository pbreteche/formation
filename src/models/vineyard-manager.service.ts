import {Injectable} from '@angular/core';
import {Vineyard} from './vineyard';
import {Http} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class VineyardManagerService  {
  _current = new Subject<Vineyard>();
  vineyardObservable: Observable<Vineyard[]>;
  vineyardList: Vineyard[];

  constructor( private client: Http) {
    this.vineyardList = [];
    this.callAPI();
  }

  callAPI() {

    this.vineyardObservable = this.client.get('assets/list.json')
      .map((response) => {
          this.vineyardList = response.json().payload.map(
            vineyardData => Object.assign(new Vineyard(), vineyardData)
          ) as Vineyard[];

          this._current.next(this.vineyardList[0]);

          return this.vineyardList;
        }
      );
  }

  get current (): Observable<Vineyard> {
    return Observable.from(this._current);
  }

  setCurrent (vineyard: Vineyard) {
    this._current.next(vineyard);
  }

  add(newVineyard: Vineyard) {
    this.client.post('fausse-url', newVineyard).subscribe(
      response => this.vineyardList.push(newVineyard)
    );
  }

  remove(vineyard: Vineyard) {
    if (this.vineyardList.length < 1) {
      throw 'trop peu de vignobles pour en supprimer d\'avantage';
    }
    this.vineyardList.splice(this.vineyardList.indexOf(vineyard), 1);
    this._current.next(this.vineyardList[0]);
  }
}
