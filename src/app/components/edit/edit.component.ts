import {Component, OnInit, Input} from '@angular/core';
import {Vineyard} from 'models/vineyard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  vineyard: Vineyard;

  constructor() { }

  ngOnInit() {
  }

}
