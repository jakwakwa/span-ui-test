import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container">

    <h1>Front-End Design Engineer Coding Test</h1>
    <h2>Developer: Jaco Kotzee</h2>
    <p>Make your selection</p>

    <nav class="nav">
      <a routerLink="/base">
        Base Project
      </a>
      <a routerLink="/guide">
        Style Guide
      </a>
    </nav>

  </div>
  `,
  styleUrls: ['home.component.scss']
})

export class HomeComponent { }
