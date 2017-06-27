import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  vineyard: Vineyard;

  @Output()
  edition = new EventEmitter();

  constructor(vineyardManager: VineyardManagerService) {
    this.vineyard = vineyardManager.current;
  }

  ngOnInit() {
  }

  stopEditing() {
    this.edition.emit();
  }

}
