import {Injectable, Inject} from '@angular/core';
import {Vineyard} from './vineyard';
import {VINEYARD_LIST_TOKEN} from '../config/vineyard-list';

@Injectable()
export class VineyardManagerService  {

  constructor(@Inject(VINEYARD_LIST_TOKEN) private list: Vineyard[]) { }

  getList(): Vineyard[] {
    return this.list;
  }

}
