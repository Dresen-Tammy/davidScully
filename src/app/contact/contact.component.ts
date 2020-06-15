import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  public message: string = '';
  public contactForm: FormGroup = this.fb.group({
      botfield: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      button: []
  });

  public constructor(private fb: FormBuilder, private http: HttpClient) { }

  public ngOnInit(): void {
  }

  public submitForm() {
    console.log('submitting form', this.contactForm.value);
    const body = new HttpParams()
      .set('form-name', 'contact-form')
      .append('bot-field', this.contactForm.value.botfield)
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
