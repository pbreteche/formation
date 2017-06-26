import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  vineyard: Vineyard;

  @Output()
  edition = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.edition.emit()
  }
}
