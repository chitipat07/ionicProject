import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestcrudPageRoutingModule } from './testcrud-routing.module';

import { TestcrudPage } from './testcrud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestcrudPageRoutingModule
  ],
  declarations: [TestcrudPage]
})
export class TestcrudPageModule {}
