import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {DataService} from './../data.service';
@Component({
  selector: 'app-uses',
  templateUrl: './uses.component.html',
  styleUrls: ['./uses.component.css']
})
export class UsesComponent implements OnInit {

  constructor(private newService:DataService) { }
  form;
  converterform;
  ngOnInit() {
    this.form=new FormGroup({
      firstname:new FormControl('Chiranjibi',Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      lastname:new FormControl('Rout'),
      age:new FormControl('')
    });
    this.converterform=new FormGroup({
      decimal:new FormControl(""),
      binary:new FormControl(""),
      octal:new FormControl(""),
      hexa:new FormControl("")
    });
    //console.log(this.newService.obj);
    this.newService.fetchData();
  }
  numbersort=[30,87,73,100,222];
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
      this.skills.unshift(this.newItem);
      this.newItem ='';
    }
  }
  removeItem=function(itemindex){
    this.skills.splice(itemindex,1);
  }
  submitForm= function(value){
    console.log(value);
  }
decimalChanged=function(oldvalue,newValue){
  if(newValue !=""){
      this.converterform.patchValue({binary:parseInt(newValue,10).toString(2)});
      this.converterform.patchValue({octal:parseInt(newValue,10).toString(8)});
      this.converterform.patchValue({hexa:parseInt(newValue,10).toString(16)});
  }
  else{
    this.converterform.patchValue({binary:""});
    this.converterform.patchValue({octal:""});
    this.converterform.patchValue({hexa:""});
  }

}
b=0;
o=0;
h=0;
binaryChanged=function(oldvalue,newValue){
  this.b=this.b+1;
  if(this.b==1){
      if(newValue!=""){
      this.converterform.patchValue({decimal:parseInt(newValue,2).toString(10)});
        }
        else{
      this.converterform.patchValue({decimal:""});
        }
          this.b=0;
  }

  
}
octalChanged=function(oldvalue,newValue){
  this.o=this.o+1;
  if(this.o==1){
      if(newValue!=""){
      this.converterform.patchValue({decimal:parseInt(newValue,8).toString(10)});
        }
        else{
      this.converterform.patchValue({decimal:""});
        }
          this.o=0;
  }
}
hexaChanged=function(oldvalue,newValue){
  this.h=this.h+1;
  if(this.h==1){
      if(newValue!=""){
      this.converterform.patchValue({decimal:parseInt(newValue,16).toString(10)});
        }
        else{
      this.converterform.patchValue({decimal:""});
        }
      this.h=0;
  }
}


}
