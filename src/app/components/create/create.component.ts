import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {FormGroup} from '@angular/forms';

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

  create(form: FormGroup) {
    this.creation.emit(this.newVineyard);
    this.newVineyard = new Vineyard();
    form.reset()
  }
}
