import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  catList: any = [];
  list = new BehaviorSubject<any>([]);
  pagelist: any = [];
  listof = new BehaviorSubject<any>([]);
  getfriends(page: any = 1) {
    return this.http.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${page}/10`
    );
  }
  getUser(par: any) {
    return this.http.get(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${par}`
    );
  }
  saveInfo(par: any) {
    this.catList.push(par);
    this.list.next(this.catList);
  }
  getCats() {
    return this.list;
  }
  savePage(page: any) {
    this.pagelist.push(page);
    this.listof.next(this.pagelist);
  }
  getPage() {
    return this.listof;
  }
}
