import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, SettingsDialogComponent, MessageDialogComponent } from './app.component';
import { ModelsService } from './models.service';

import { MaterialModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SettingsDialogComponent,
    MessageDialogComponent
  ],
  entryComponents: [
    AppComponent,
    SettingsDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [
    ModelsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
