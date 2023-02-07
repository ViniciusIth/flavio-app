import { catchError, of } from 'rxjs';
import { AuthService } from './../../core/services/auth.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  @Output()
  registerEvent = new EventEmitter<void>();

  errored: boolean = false;

  constructor(private auth: AuthService) {}

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{6,}$'
      ),
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl('', [
      Validators.required,
      (control: FormControl): ValidationErrors | null => {
        let pass = control.root.get('password')?.value;
        let confirmPass = control.root.get('passwordConfirm')?.value;

        return pass === confirmPass ? null : { notSame: true };
      },
    ]),
  });

  register() {
    const formValues = this.registerForm.value;

    if (formValues.name && formValues.email && formValues.password) {
      this.auth
        .register(formValues.name, formValues.email, formValues.password)
        .pipe(
          catchError((err, caught) => {
            this.errored = true;
            console.log(err, caught);
            return of();
          })
        )
        .subscribe((data) => {
          this.errored = false;
          this.registerEvent.emit();
        });
    }
  }
}
