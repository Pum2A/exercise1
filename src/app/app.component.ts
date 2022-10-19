import { transition, trigger, state , animate, style,  } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit  {
  title = 'exercise1';
  
  values = <any> [
    '0000 0000 0000 0000'
  ];
  userNameValue = <any> [
    'Jane Appleseed'
  ];
  dateValues = <any> [
    '00/00'
  ];
  
 
  
  exform!: FormGroup ;
  
    
    
    ngOnInit() {
      
    
 
 
 
    this.exform = new FormGroup ({
      'name' : new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(40)]),
      'cardNumber' : new FormControl(null, [Validators.required, Validators.maxLength(16), Validators.minLength(16)]),
      'expDate' : new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]),
      'yearMonth' : new FormControl(null, [Validators.required, Validators.maxLength(5), Validators.minLength(5)]),
      'CVC' : new FormControl(null, [Validators.required, Validators.maxLength(3), Validators.minLength(3),]),
    })
  }
  clicksub(){
    console.log(this.exform.value);
    this.exform.reset();
  }
  

  cardNumber = '0000 0000 0000 0000' ;
  number = '';


  visible:boolean = false;
  visible2:boolean = true;
  

  onclick(){
    this.visible = !this.visible;
    this.visible2 = !this.visible;
    

    }
  

  


}
