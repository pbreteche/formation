import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  vineyards: Vineyard[];

  constructor(private vineyardManager: VineyardManagerService) {
     vineyardManager.vineyardObservable.subscribe(
      vineyards => { this.vineyards = vineyards }
    );
  }

  ngOnInit() {
  }

  selectVineyard(vineyard: Vineyard) {
    this.vineyardManager.setCurrent(vineyard);
  }

}
