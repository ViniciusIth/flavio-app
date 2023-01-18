import { AuthService } from './../../../core/services/auth.service';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shr-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserButtonComponent {
  constructor(private auth: AuthService) {}
}
