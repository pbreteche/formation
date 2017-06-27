import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {FormGroup} from '@angular/forms';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newVineyard = new Vineyard();

  constructor(private vineyardManager: VineyardManagerService) { }

  ngOnInit() {
  }

  create(form: FormGroup) {
    this.vineyardManager.add(this.newVineyard);
    this.newVineyard = new Vineyard();
    form.reset()
  }
}
