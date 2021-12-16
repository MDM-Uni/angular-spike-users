import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../interface/user";

@Injectable()
export class UsersService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
    this.http = http
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url)
  }
}
