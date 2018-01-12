import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
obj={
  name:'test',
  age:'12',
  subject:'education'
}
success(){
  return 'successful';
}
}
