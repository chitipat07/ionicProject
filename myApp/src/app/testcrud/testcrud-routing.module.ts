import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestcrudPage } from './testcrud.page';

const routes: Routes = [
  {
    path: '',
    component: TestcrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestcrudPageRoutingModule {}
