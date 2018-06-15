import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// containers
import { GuideComponent } from './container/guide.component';

const routes: Routes = [
  {
    path: 'guide',
    component: GuideComponent
  }
];

@NgModule({
  declarations: [
    GuideComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class GuideModule { }
