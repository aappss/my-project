import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './../../_nav';

import { first } from 'rxjs/operators';

import { User } from '../../_models';
import { UserService } from '../../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  users: User[] = [];
  constructor(private userService: UserService) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
  ngOnInit() {
    this.userService.getAll().pipe(first()).subscribe(users => { 
        this.users = users; 
    });
}
}
