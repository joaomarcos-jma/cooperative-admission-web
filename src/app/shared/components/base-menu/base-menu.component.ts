import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      path: '/',
      icon: 'menu',
    },
    {
      path: '/cooperative',
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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
}
