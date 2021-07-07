import { Component, OnInit } from '@angular/core';
import { ContactFormModel } from 'src/app/models/contact-form-model';
import { Router, RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // log(val: any){
  //   console.log(val)
  // }
  public user = new ContactFormModel()

  onSub(form: any){
    alert('Tack för ditt meddelande')
    console.log(form.value)

    form.reset()
    
  }

  


  constructor() { }

  ngOnInit(): void {
    
  }

}
