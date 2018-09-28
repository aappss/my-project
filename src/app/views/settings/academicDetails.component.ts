import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {DataSource} from '@angular/cdk/collections';
import { User } from '../../models/user.model';
import { DemoService } from "../../services/demo.service";


@Component({
  selector: 'usertable',
  templateUrl: 'academicDetails.component.html'
})
export class AcademicDetailsComponent {

  dataSource = new UserDataSource(this.demoService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private demoService: DemoService) { }

  // users: any;
  // constructor(
  //   private DemoService: DemoService
  // ) {
  //   this.getUsers();
  //  }
  // getUsers() {
  //   this.DemoService.getMyItems()
  //   .then(data => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }

}
export class UserDataSource extends DataSource<any> {
  constructor(private demoService: DemoService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.demoService.getUser();
  }
  disconnect() {}
}