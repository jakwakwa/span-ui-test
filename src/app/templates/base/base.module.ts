import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// containers
import { BaseComponent } from './container/base.component';
// components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    // add 'base' to path after work complete
    component: BaseComponent
  }
];

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class BaseModule { }
