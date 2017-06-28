import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Vineyard} from 'models/vineyard';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  vineyard: Vineyard;

  constructor(
    private vineyardManager: VineyardManagerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.vineyard = new Vineyard('En cours de chargement');
    this.activatedRoute.params.subscribe(
      (params: Params) =>
        this.vineyardManager.get(+params.id).then((vineyard: Vineyard) => this.vineyard = vineyard )
    );
  }

  ngOnInit() {
  }

  remove() {
    this.vineyardManager.remove(this.vineyard);
    this.router.navigate(['']);
  }
}
