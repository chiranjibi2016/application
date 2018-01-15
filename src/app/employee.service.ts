import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {

  constructor(private http:Http) { }
getEmployee(){
  this.http.get('assets/data/employee.json').map(
    (response)=>response.json()
  ).subscribe(
  (data)=>console.log(data)
  )
}
}
