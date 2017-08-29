

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license


/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';

import { ModelsService } from './models.service';

describe('ModelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelsService]
    });
  });

  it('should be created', inject([ModelsService], (service: ModelsService) => {
    expect(service).toBeTruthy();
  }));
});
