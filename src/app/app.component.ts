import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav : MdSidenav;
  models: Model[] = [
    { name: "Hansel", status: "Kitesurfing", about: "I'm a model", rows: 1 },
    { name: "Zoolander", status: "Teaching children to read", about: "I'm a model", rows: 1},
    { name: "Mugatu", status: "Designing the masterplan", about: "I'm a tirant", rows: 2},
    { name: "Hansel", status: "Kitesurfing", about: "I'm a model", rows: 1 },
    { name: "Zoolander", status: "Teaching children to read", about: "I'm a model", rows: 1},
    { name: "Hansel", status: "Kitesurfing", about: "I'm a model", rows: 1 },
    { name: "Zoolander", status: "Teaching children to read", about: "I'm a model", rows: 1},
  ];
  selectedModel = {};
  isDarkTheme: boolean = false;

  constructor(public dialog:MdDialog, public vcr: ViewContainerRef){
  }
  openDialog(){
    // dialog config
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    // open dialog
    this.dialog.open(SettingsDialogComponent, config);
  }

  showModelDetails(model:Model) {
    this.selectedModel = model;
    this.sidenav.open();
  }
}

class Model {
  name: string;
  status: string;
  about: string;
  rows: number;
}

@Component({
  selector: 'settings-dialog',
  template: `
  <label>Would you like to receive notifications?</label>
  <md-slide-toggle></md-slide-toggle>
  `
})
export class SettingsDialogComponent{

}