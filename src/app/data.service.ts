import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable()
export class DataService {

  constructor(private http:Http) { }
  fetchData(){
    this.http.get('src/data/student.json').subscribe(
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
