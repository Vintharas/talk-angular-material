

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable()
export class ModelsService {

  models: Model[] = [
    { name: "Derek", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Hansel", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1, cols:1 },
    { name: "Valentina", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
    { name: "Mugatu", status: "Designing the masterplan", about: "I'm a tirant", messages: [], rows: 3, cols:1},
    { name: "Katinka", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Rufus", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
    { name: "Brint", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "Meekus", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "EvilDJ", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
    { name: "JPPrewit", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
  ];

  constructor() { }

  getModels(){
    return this.models;
  }

}



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
