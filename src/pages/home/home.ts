import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any[] = [10000,4300,2300,6800,2030,600];

  constructor(public navCtrl: NavController) {

  }
}
