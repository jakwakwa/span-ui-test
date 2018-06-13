import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>Span UI Engineer Test Project!</div>
    <nav class="nav">
      <a routerLink="/">
        Home
      </a>
      <a routerLink="/base">
        Base
      </a>
      <a routerLink="/guide">
        Guide
      </a>
      <a routerLink="/oops">
        404
      </a>
    </nav>
  `,
  styleUrls: ['home.component.scss']
})

export class HomeComponent { }
