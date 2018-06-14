import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
// containers
import { BaseComponent } from './container/base.component';
// components
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';

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
    DashboardComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChartModule
  ],
  providers: []
})

export class BaseModule { }
