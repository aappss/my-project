import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from '../models/user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  // // coins= [
  // //   {id: 1, name: 'BTC'},
  // //   {id: 2, name: 'XRP'}
  // // ];

  // apiUrl = 'http://jsonplaceholder.typicode.com';

  // constructor(public http: HttpClient) {
  //   console.log('Hello RestServiceProvider Provider');
  // }
  // getMyItems()
  // {
  //   // return this.coins;
  //   return new Promise(resolve => {
  //     this.http.get(this.apiUrl+'/users').subscribe(data => {
  //       resolve(data);
  //     }, err => {
  //       console.log(err);
  //     });
  //   });
  // }
  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  
  constructor(private http: HttpClient) { }
  
  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl);
  }

}
