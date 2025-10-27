import { CommonModule } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class HeaderComponent  implements OnInit {
  constructor() { }
  ngOnInit() {}
}