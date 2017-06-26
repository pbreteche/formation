import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  vineyard: Vineyard;

  @Output()
  edition = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  stopEditing() {
    this.edition.emit();
  }

}
