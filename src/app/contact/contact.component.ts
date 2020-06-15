import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
  });

  public constructor(private fb: FormBuilder, private http: HttpClient) { }

  public ngOnInit(): void {
  }

  public submitForm() {
    const body = new HttpParams()
    .set('form-name', 'contact-form')
    .append('name', this.contactForm.value.name)
    .append('email', this.contactForm.value.email)
    .append('message', this.contactForm.value.message);
    console.log('body', body);
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
    .subscribe(
      (res) => {
        console.log('post successful', res);
      },
      response => {
        console.log('error', response);
      },
      () => {
        console.log('Post observable complete');
      });

  }
}
