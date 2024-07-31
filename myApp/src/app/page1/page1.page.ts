
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerData, HomeCrudService } from './HomeCrudService.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  datalist : CustomerData[]=[];
  constructor(private dataService: HomeCrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef) {
    this.dataService.loadAllData().subscribe(res => {
    this.datalist = res;
    this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

  gopage2(){

  }

}
