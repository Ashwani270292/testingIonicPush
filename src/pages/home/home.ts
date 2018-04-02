import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  message: string;

  constructor(public navCtrl: NavController,
  public params: NavParams) {
    this.message = params.get('message');
  }

}
