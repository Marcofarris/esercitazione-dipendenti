import { TestBed } from '@angular/core/testing';

import { SDipendenteService } from './sdipendente.service';

describe('SDipendenteService', () => {
  let service: SDipendenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SDipendenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
