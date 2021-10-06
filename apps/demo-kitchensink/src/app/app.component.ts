import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'demorepo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'bg-light'
  }
})
export class AppComponent {
  title = 'demo-kitchensink';
}
