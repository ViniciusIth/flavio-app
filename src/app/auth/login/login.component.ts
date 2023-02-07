import { User } from './../../core/interfaces/user.schema';
import { UserAuth } from './../../core/interfaces/user-auth.schema';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { catchError, of, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  constructor(
    private route: Router,
    private auth: AuthService
    ) {}

  hasAttempts = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    const formValues = this.loginForm.value;
    if (formValues.email && formValues.password) {
      this.auth
        .login(formValues.email, formValues.password)
        .pipe(
          catchError((err, caught) => {
            console.log(err, caught);
            return of();
          })
        )
        .subscribe((data: Partial<User>) => {
          if (data.auth) {
            this.auth.saveAuthData(data.auth);
            this.route.navigate(['user'])
          }
        });
    }
  }
}
