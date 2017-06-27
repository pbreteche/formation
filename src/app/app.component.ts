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
  isEditing = false;

  constructor(vineyardManager: VineyardManagerService) {
    this.currentVineyard = vineyardManager.current;
  }

  setEditing(isEditing: boolean) {
    this.isEditing = isEditing;
  }
}
