

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// Add Animations, Material Design Custom Module and Angular Flex Layout
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCustomMaterialModule } from './app-custom-material/app-custom-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent, AddMessageComponent } from './app.component';
import { ModelsService } from './models.service';


@NgModule({
  declarations: [
    AppComponent,
    AddMessageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppCustomMaterialModule
  ],
  entryComponents: [
    AppComponent,
    AddMessageComponent
  ],
  providers: [ModelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
