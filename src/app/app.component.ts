import { Component } from '@angular/core';
import {Vineyard} from '../models/vineyard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentVineyard: Vineyard;

  constructor() {
    this.currentVineyard = new Vineyard(
      'Domaine de Pierre',
      '3 chemin des pins',
      42
    );
  }
}
