import { TestBed } from '@angular/core/testing';

import { BoutiqueDetailsService } from './boutique-details.service';

describe('BoutiqueDetailsService', () => {
  let service: BoutiqueDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
