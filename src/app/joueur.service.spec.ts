import { TestBed, inject } from '@angular/core/testing';

import { JoueurService } from './joueur.service';

describe('JoueurService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoueurService]
    });
  });

  it('should be created', inject([JoueurService], (service: JoueurService) => {
    expect(service).toBeTruthy();
  }));
});
