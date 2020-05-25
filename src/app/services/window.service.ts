import { Injectable } from '@angular/core';
import { CLIENT_RENEG_WINDOW } from 'tls';

function __window(): any {
  return window;
}
@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  get nativeWindow(): any {
    return __window();
  }
}
