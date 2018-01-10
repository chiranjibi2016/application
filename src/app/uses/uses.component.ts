import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.css']
})
export class UsesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  details={
    id:'1',
    name:'Angular4'
  }
  technologies=['HTML','CSS','JAVASCRIPT'];
  skills=['html','css','javascript'];
  isEdit:boolean=false;
toggleClick(){
  this.isEdit=!this.isEdit;
}
newItem='';
addItem=function(){
  if(this.newItem !=''){
  this.skills.push(this.newItem);
  this.newItem ='';
}
}
removeItem=function(itemindex){
this.skills.splice(itemindex,1);
}

}
