import { Component } from '@angular/core';
import {Vineyard} from '../models/vineyard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentVineyard: Vineyard;
  vineyardList: Array<Vineyard>;
  isEditing = false;

  constructor() {
    this.vineyardList = [
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
    this.currentVineyard = this.vineyardList[0];
  }

  setCurrentVineyard(vineyard: Vineyard) {
    this.currentVineyard = vineyard;
  }

  setEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }

  add(vineyard: Vineyard) {
    this.vineyardList.push(vineyard);
  }
}
