import { BaseControlValueAccessor } from './../directives/base-control-value-accessor.directive';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent extends BaseControlValueAccessor<boolean> implements OnInit {
  public nameTouched: boolean = false;
  public emailTouched: boolean = false;
  public messageTouched: boolean = false;
  public contactForm: FormGroup;

  public constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) {
      super();
    }

  public ngOnInit(): void {
    this.contactForm = this.fb.group({
      botfield: [''],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  public submitForm(e: Event) {
    e.preventDefault();

    if (this.contactForm.value.botfield) {
      this.openSnackBar('Oops, you filled out too many fields.', '');
      return;
    }

    const {botfield, name, email, message}: {botfield: string, name: string, email: string, message: string} = this.contactForm.value;

    const body = new HttpParams()
      .set('form-name', 'contact-form')
      .append('bot-field', botfield)
      .append('name', name)
      .append('email', email)
      .append('message', message);

    this.http.post('/', body.toString(), {headers: { 'Content-Type': 'application/x-www-form-urlencoded'}, responseType: 'text'})
      .subscribe(
        (res) => {
          console.log('success', res);
          this.openSnackBar( `Thanks ${this.contactForm.value.name} for reaching out. I will get back to you soon.`, '');
          this.nameTouched = false;
          this.emailTouched = false;
          this.messageTouched = false;
          this.contactForm.reset();
        },
        response => {
          this.openSnackBar(
            `Sorry, ${this.contactForm.value.name}, there was a problem submitting the form. Please email me at contact@daviddresen.com`, ''
            );
        }
      ).unsubscribe();
  }

  public inputChange($event: any): void {
    switch ($event.target.id) {
      case 'name': {
        this.nameTouched = true;
        break;
      }
      case 'email': {
        this.emailTouched = true;
        break;
      }
      case 'message': {
        this.messageTouched = true;
        break;
      }
    }
  }

  private openSnackBar(message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['david-snackbar'];
    config.duration = 30000;
    this.snackBar.open(message, action, config);
  }
}
