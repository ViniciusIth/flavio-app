import { ChangeDetectionStrategy, Component } from '@angular/core';
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
        console.log(control, pass, confirmPass);

        return pass === confirmPass ? null : { notSame: true };
      },
    ]),
  });
}
