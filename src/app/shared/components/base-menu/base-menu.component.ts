import { Component, OnInit } from '@angular/core';

export interface NavRoutes {
  path: string;
  icon: string;
}

@Component({
  selector: 'app-base-menu',
  templateUrl: './base-menu.component.html',
  styleUrls: ['./base-menu.component.scss'],
})
export class BaseMenuComponent implements OnInit {
  navRoutes: NavRoutes[] = [
    {
      path: '/home',
      icon: 'menu',
    },
    {
      path: '/cooperation-admission',
      icon: 'search',
    },
    {
      path: '/star',
      icon: 'star',
    },
    {
      path: '/chat',
      icon: 'chat',
    },
    {
      path: '/tune',
      icon: 'tune',
    },
    {
      path: '/account',
      icon: 'account_balance',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
