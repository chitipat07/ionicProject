import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {
  tmpvalue: any = [];
  obj: any =  [];

  constructor(
    private myroute: ActivatedRoute,
    private navCtrl: NavController
  ) { 

    this.myroute.params.subscribe(params => {
      this.tmpvalue = params['value'];
      console.log(typeof(this.tmpvalue));

      this.obj = JSON.parse(this.tmpvalue);
      console.log(this.obj['textin']);
      console.log(this.obj['numin']);
    });
  }

  ngOnInit() {
    
  }

  gopage1() {
    this.navCtrl.pop();
  }

}

