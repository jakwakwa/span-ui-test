import { Component, Output, EventEmitter } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
})

export class DashboardComponent {
  menuState = 'out';

  @Output()
  toggle: EventEmitter<any> = new EventEmitter();

  toggleMenu() {
    // console.log('2nd hamburger clicked');
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.toggle.emit(this.menuState);
  }
}
