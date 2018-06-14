import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})

export class ProjectsComponent {

  alta = 'assets/img/alta-logo.png';
  calendar = 'assets/img/calendar-icon.svg';
  envelope = 'assets/img/envelope-icon.svg';
  cards: any = [1, 2, 3, 4];

}
