import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-base',
  templateUrl: 'base.component.html',
  styleUrls: ['base.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(-200%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BaseComponent implements OnInit {
  menuState = 'out';

  projects: any[];

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    this.projects = [
      {
        logo: 'assets/img/alta-logo.png',
        'startDate': '2018-03-01',
        'endDate': '2018-05-30',
        'customer': 'Alta Motors',
        'summary': 'Bike Catalog, 2018',
        'daysLeft': 21,
        'cost': 2350,
        'tasksLeft': 5,
        'newMessage': true,
        'tasksTotal': 8
      },
      {
        'logo': 'assets/img/dwell-logo.png',
        'startDate': '2018-04-01',
        'endDate': '2018-05-30',
        'customer': 'Dwell',
        'summary': 'Architecture Review',
        'daysLeft': 4,
        'cost': 1575,
        'tasksLeft': 2,
        'newMessage': false,
        'tasksTotal': 6
      },
      {
        'logo': 'assets/img/here-logo.png',
        'startDate': '2018-04-01',
        'endDate': '2018-05-30',
        'customer': 'Here',
        'summary': 'GPS Implementation and Testing',
        'daysLeft': 28,
        'cost': 995,
        'tasksLeft': 3,
        'newMessage': false,
        'tasksTotal': 10
      },
      {
        'logo': 'assets/img/rms-logo.png',
        'startDate': '2018-04-01',
        'endDate': '2018-05-30',
        'customer': 'RMS',
        'summary': 'Risk Assessor Development and Testing',
        'daysLeft': 7,
        'cost': 2350,
        'tasksLeft': 3,
        'newMessage': true,
        'tasksTotal': 8
      }
    ];
  }

  handleToggle(event) {
    this.menuState = event;
  }
}
