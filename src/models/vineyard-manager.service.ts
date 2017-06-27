import { Injectable } from '@angular/core';
import {Vineyard} from './vineyard';

@Injectable()
export class VineyardManagerService {

  list: Vineyard[];

  constructor() {
    this.list = [
      new Vineyard(
        'Domaine de Pierre',
        '3 chemin des pins',
        42
      ),
      new Vineyard(
        'Château Bertrand',
        '3 route de la plage',
        51
      ),
      new Vineyard(
        'Saint Maxime',
        '3 allée de la soleil',
        39
      ),
      new Vineyard(
        'Mont Julien',
        '3 boulevard des dunes',
        45
      ),
    ];
  }

  getList(): Vineyard[] {
    return this.list;
  }

}
