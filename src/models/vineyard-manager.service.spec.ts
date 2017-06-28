import { TestBed, inject } from '@angular/core/testing';

import { VineyardManagerService } from './vineyard-manager.service';
import {Http, Response, ResponseOptions, HttpModule, XHRBackend} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {MockBackend} from '@angular/http/testing';

@Injectable()
class HttpMock {
  get(): Observable<Response> {
    return Observable.create( observer => observer.next(
      new Response(
        new ResponseOptions(
          {
            body: JSON.stringify({
              status: 'success',
              payload: []
            })
          }
        )
      )
    ))
  }
}

describe('VineyardManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        VineyardManagerService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([VineyardManagerService, XHRBackend], (service: VineyardManagerService, mockBackend) => {
    const mockResponse = {
      status: 'success',
      payload: []
    };

    mockBackend.connections.subscribe((connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    }));
    expect(service).toBeTruthy();
  }));
});
