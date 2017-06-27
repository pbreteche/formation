import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  vineyard: Vineyard;

  @Output()
  edition = new EventEmitter();

  constructor(private vineyardManager: VineyardManagerService) {
    this.vineyard = new Vineyard('En cours de chargement');
    vineyardManager.current.subscribe(
      vineyard => this.vineyard = vineyard
    );
  }

  ngOnInit() {
  }

  edit() {
    this.edition.emit()
  }

  remove() {
    this.vineyardManager.remove(this.vineyard);
  }
}
