import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdMenuModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdInputModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdIconModule,
    MdGridListModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
  ],
  exports: [
    MdMenuModule,
    MdToolbarModule,
    MdSidenavModule,
    MdTabsModule,
    MdIconModule,
    MdGridListModule,
    MdDialogModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [],
})
export class AppCustomMaterialModule { }
