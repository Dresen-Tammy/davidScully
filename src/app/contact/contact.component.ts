import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

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

  public constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) { }

  public ngOnInit(): void {
  }

  public submitForm(e: Event) {
    e.preventDefault();
    this.openSnackBar(`Thanks ${this.contactForm.value.name}  for reaching out. I will get back to you soon.`, '');

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
    this.contactForm.reset();
    return;
    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, responseType: 'text'})
    .subscribe(
      (res) => {
        console.log('success', res);
        this.openSnackBar( `Thanks ${this.contactForm.value.name} for reaching out. I will get back to you soon.`, '');
        this.contactForm.reset();
      },
      response => {
        this.openSnackBar(
          `Sorry, ${this.contactForm.value.name}, there was a problem submitting the form. Please email me at contact@daviddresen.com`, ''
          );
      },
      ).unsubscribe();

  }

  private openSnackBar(message: string, action: string) {
    let config = new MatSnackBarConfig();
    config.panelClass = ['david-snackbar'];
    config.duration = 30000;
    this.snackBar.open(message, action, config);
  }
}
