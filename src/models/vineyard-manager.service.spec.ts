import { TestBed, inject } from '@angular/core/testing';

import { VineyardManagerService } from './vineyard-manager.service';

describe('VineyardManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VineyardManagerService]
    });
  });

  it('should be created', inject([VineyardManagerService], (service: VineyardManagerService) => {
    expect(service).toBeTruthy();
  }));
});
