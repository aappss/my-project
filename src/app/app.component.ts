import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DemoService } from './services/demo.service';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  coins;
  users: any;
  constructor(
    private router: Router,
    private DemoService: DemoService,
  ) { this.getUsers();}
  

  ngOnInit() {
    // this.coins = this.DemoService.getMyItems();
      console.log(this.coins);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  getUsers() {
    // this.DemoService.getUser()
    // .then(data => {
    //   this.users = data;
    //   console.log(this.users);
    // });
  }

}
