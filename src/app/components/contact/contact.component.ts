import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  myform!: FormGroup;

  userName = new FormControl('')
  userAge = new FormControl('')
  userEmail =  new FormControl('')
  userPassword =  new FormControl('')

email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.fb.group({
      userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      userAge: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      userEmail: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$')]],
      userPassword: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.myform.valid) {
        alert('Form Submitted!')
    }
  }

}
