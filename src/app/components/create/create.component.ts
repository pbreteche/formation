import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  newVineyard = new Vineyard();

  @Output()
  creation = new EventEmitter<Vineyard>();

  constructor() { }

  ngOnInit() {
  }

  create() {
    this.creation.emit(this.newVineyard);
    this.newVineyard = new Vineyard();
  }

}
