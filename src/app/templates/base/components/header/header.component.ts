import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent {
  logo = 'assets/img/dummy-logo.svg';
  profileImg = 'assets/img/profile-img.jpg';
}
