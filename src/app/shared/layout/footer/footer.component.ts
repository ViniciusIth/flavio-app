import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pub-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
