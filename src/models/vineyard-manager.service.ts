import {Injectable} from '@angular/core';
import {Vineyard} from './vineyard';
import {Http} from '@angular/http';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VineyardManagerService  {
  _current = new Subject<Vineyard>();
  vineyardSubject: Subject<Vineyard[]>;
  vineyardList: Vineyard[];

  constructor( private client: Http) {
    this.vineyardList = [];
    this.callAPI();
  }

  callAPI() {

    this.vineyardSubject = new Subject<Vineyard[]>();
    this.client.get('assets/list.json')
      .subscribe((response) => {
          this.vineyardList = response.json().payload.map(
            vineyardData => Object.assign(new Vineyard(), vineyardData)
          ) as Vineyard[];

          this._current.next(this.vineyardList[0]);
          this.vineyardSubject.next(this.vineyardList);
        }
      );
  }

  get current (): Observable<Vineyard> {
    return Observable.from(this._current);
  }

  get list (): Observable<Vineyard[]> {
    return Observable.from(this.vineyardSubject);
  }

  setCurrent (vineyard: Vineyard) {
    this._current.next(vineyard);
  }

  add(newVineyard: Vineyard) {
    // this.client.post('fausse-url', newVineyard).subscribe(
    //   response => this.vineyardList.push(newVineyard)
    // );
    newVineyard.id = this.vineyardList.length + 1;
    this.vineyardList.push(newVineyard);
  }

  remove(vineyard: Vineyard) {
    if (this.vineyardList.length < 1) {
      throw 'trop peu de vignobles pour en supprimer d\'avantage';
    }
    // TODO: récupérer le bon élément à supprimer en passant par l'ID
    this.vineyardList.splice(this.vineyardList.indexOf(vineyard), 1);
    this._current.next(this.vineyardList[0]);
  }

  get(id: number): Promise<Vineyard> {
    return this.client.get('assets/list.json')
      .toPromise()
      .then(
        (response) =>
          response.json().payload
            .filter(vineyardData => vineyardData.id == id)
            .map(vineyardData => Object.assign(new Vineyard(), vineyardData))
            [0] as Vineyard
      );
  }
}
