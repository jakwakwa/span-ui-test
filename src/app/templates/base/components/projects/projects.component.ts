import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})

export class ProjectsComponent {
  progress: any;

  @Input()
  cards: any[];

  alta = 'assets/img/alta-logo.png';
  calendar = 'assets/img/calendar-icon.svg';
  envelope = 'assets/img/envelope-icon.svg';

  constructor() {
    this.progress = {
      datasets: [
        {
          data: [8, 5],
          backgroundColor: [
            '#FF2C68',
            '#535572',
            '#FFCE56'
          ]
        }]
    };
  }





}
