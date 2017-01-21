import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, SettingsDialogComponent } from './app.component';

import { MaterialModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent
  ],
  entryComponents: [
    AppComponent,
    SettingsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
