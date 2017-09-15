import { TestBed, inject } from '@angular/core/testing';

import { ServiceCallService } from './service-call.service';

describe('ServiceCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceCallService]
    });
  });

  it('should be created', inject([ServiceCallService], (service: ServiceCallService) => {
    expect(service).toBeTruthy();
  }));
});
