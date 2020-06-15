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
      message: ['', Validators.required]
  });

  public constructor(private fb: FormBuilder, private http: HttpClient) { }

  public ngOnInit(): void {
  }

  public submitForm(e: Event) {
    e.preventDefault();
    if (this.contactForm.value.botfield) {
      return;
    }
    console.log('submitting form', this.contactForm.value);
    const body = new HttpParams()
      .set('form-name', 'contact-form')
      .append('bot-field', this.contactForm.value.botfield)
      .append('name', this.contactForm.value.name)
      .append('email', this.contactForm.value.email)
      .append('message', this.contactForm.value.message);

    console.log('body', body);
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, responseType: 'text'})
    .subscribe(
      (res) => {
        console.log('post successful', res);
      },
      response => {
        console.log('response', response);
      },
      () => {
        console.log('Post observable complete');
      });

  }
}
