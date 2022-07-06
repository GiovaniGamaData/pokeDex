import { TestBed } from '@angular/core/testing';

import { PokeListCardService } from './poke-list-card.service';

describe('PokeListCardService', () => {
  let service: PokeListCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeListCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
