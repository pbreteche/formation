import {async, ComponentFixture, TestBed, inject, fakeAsync} from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivatedRouteStub, RouterStub} from 'testing/router-stubs';
import {VineyardManagerService} from '../../../models/vineyard-manager.service';
import {VineyardManagerStub} from '../../../testing/vineyard-manager-stub';

let activatedRoute: ActivatedRouteStub;


describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [
        { provide: VineyardManagerService, useClass: VineyardManagerStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub},
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', fakeAsync(() => {
    activatedRoute.testParams = { id: 172 };

    expect(component).toBeTruthy();
  }));
});
