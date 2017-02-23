

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, SettingsDialogComponent, AddMessageComponent } from './app.component';
import { ModelsService } from './models.service';

import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent,
    AddMessageComponent
  ],
  entryComponents: [
    AppComponent,
    SettingsDialogComponent,
    AddMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule.forRoot()
  ],
  providers: [
    ModelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
