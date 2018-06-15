import { Component } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.component.html',
  styleUrls: ['guide.component.scss']
})
export class GuideComponent {
  logo = 'assets/img/dummy-logo.svg';
  calendar = 'assets/img/calendar-icon.svg';
  envelope = 'assets/img/envelope-icon.svg';
}
