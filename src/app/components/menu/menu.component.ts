import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  vineyards: Vineyard[];

  @Output()
  vineyardSelection = new EventEmitter<Vineyard>();

  constructor() { }

  ngOnInit() {
  }

  selectVineyard(vineyard: Vineyard) {
    this.vineyardSelection.emit(vineyard);
  }

}
