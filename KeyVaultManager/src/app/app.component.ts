import { Component } from '@angular/core';
import {IpcRenderer} from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KeyVaultManager';

  private ipc:IpcRenderer

  constructor(){

  }

}
