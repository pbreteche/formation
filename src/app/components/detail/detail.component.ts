import {Component, OnInit, Input} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()
  vineyard: Vineyard;

  constructor() { }

  ngOnInit() {
  }

}
