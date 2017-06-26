import {Component, OnInit, Input} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input()
  vineyards: Vineyard[];

  constructor() { }

  ngOnInit() {
  }

}
