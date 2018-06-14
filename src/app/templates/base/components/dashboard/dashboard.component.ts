import { Component, Output, EventEmitter } from '@angular/core';

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
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.toggle.emit(this.menuState);
  }
}
