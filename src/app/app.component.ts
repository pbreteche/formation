import { Component } from '@angular/core';
import {Vineyard} from '../models/vineyard';
import {VineyardManagerService} from '../models/vineyard-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentVineyard: Vineyard;
  vineyardList: Array<Vineyard>;
  isEditing = false;

  constructor(vineyardManager: VineyardManagerService) {
    this.vineyardList = vineyardManager.getList();
    this.currentVineyard = this.vineyardList[0];
  }

  setEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
}
