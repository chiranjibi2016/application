import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class DataService {

  constructor(private http:Http) { }
  fetchData(){
    this.http.get('assets/data/student.json').map(
      (response)=>response.json()
    ).subscribe(
      (data)=>console.log(data)
    )
  }

obj={
  name:'test',
  age:'12',
  subject:'education'
}

success(){
  return 'successful';
}
}
