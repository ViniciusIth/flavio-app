import { Component } from '@angular/core';

@Component({
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  state: 'login' | 'register' = 'login';

  alternateState() {
    this.state = this.state == 'login' ? 'register' : 'login';
  }
}
