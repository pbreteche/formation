import {Injectable, Inject} from '@angular/core';
import {Vineyard} from './vineyard';
import {VINEYARD_LIST_TOKEN} from '../config/vineyard-list';

@Injectable()
export class VineyardManagerService  {
  current: Vineyard;

  constructor(@Inject(VINEYARD_LIST_TOKEN) private list: Vineyard[]) {
    this.current = this.list[0];
  }

  getList(): Vineyard[] {
    return this.list;
  }

  add(newVineyard: Vineyard) {
    this.list.push(newVineyard);
  }

  setCurrent(vineyard: Vineyard) {
    this.current = vineyard;
  }
}
