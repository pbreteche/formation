import {Injectable} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VineyardManagerStub  {
  _current = new Subject<Vineyard>();
  vineyardsSubject= new Subject<Vineyard[]>();
  vineyardList: Vineyard[];

  constructor() {
    this.vineyardList = [ new Vineyard(), new Vineyard()];

    this._current.next(this.vineyardList[0]);
    this.vineyardsSubject.next(this.vineyardList);
  }

  get current (): Observable<Vineyard> {
    return Observable.from(this._current);
  }

  get list (): Observable<Vineyard[]> {
    return Observable.from(this.vineyardsSubject);
  }

  setCurrent (vineyard: Vineyard) {
    this._current.next(vineyard);
  }

  add(newVineyard: Vineyard) {
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
    return new Promise((resolve, reject) => {
      resolve(this.vineyardList[0]);
    });
  }
}
