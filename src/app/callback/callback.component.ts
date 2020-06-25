import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.less']
})
export class CallbackComponent implements OnInit {

  public constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.handleAuthCallback();
  }

}
