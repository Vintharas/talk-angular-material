

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license



import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig, MdDialogRef, MdInputContainer } from '@angular/material';

import { ModelsService } from './models.service';
import { Model } from './model';
import { Message } from './model';

import { AppCustomMaterialModule } from './app-custom-material/app-custom-material.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  models: Model[] = [];
  selectedModel: Model;
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private modelsService: ModelsService,
    private vcr: ViewContainerRef,
    private mdDialog: MdDialog) { }

  ngOnInit() {
    this.models = this.modelsService.getModels();
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  showDetails(model: Model) {
    // 1. set selected models
    this.selectedModel = model;
    // 2. open sidenav
    this.sidenav.open();
  }

  openDialog(){
    console.log("TODO: open settings dialog");
  }

  addMessage() {
    // Open dialog to add add message
    // 1. create dialog config
    const dialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = this.vcr;
    // 2. open dialog
    const dialog = this.mdDialog.open(AddMessageComponent, dialogConfig);
    // 3. pass selected model to dialog
    (<any>dialog.componentInstance).selectedModel = this.selectedModel;
  }
}

@Component({
  selector: 'add-message',
  template: `
  <form (submit)="addMessage()">
    <md-input-container>
      <input mdInput name="message" [(ngModel)]="message" placeholder="Message">
    </md-input-container>
    <button md-raised-button color="accent">Add Message</button>
  </form>
  `
})
export class AddMessageComponent {
  message = '';

  constructor(private mdDialogRef: MdDialogRef<AddMessageComponent>) { }

  addMessage() {
    // 1. create message
    //const newMessage = { who: 'John Doe', content: this.message };
    var newMessage: Message = new Message();
    newMessage.who = 'John Doe';
    newMessage.message = this.message;

    // 2. add message to selected model
    const selectedModel: Model = (<any>this.mdDialogRef.componentInstance).selectedModel;
    selectedModel.messages.push(newMessage);
    // 3. close dialog
    this.mdDialogRef.close();
  }
}
