import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardSpinnerComponent } from './card-spinner/card-spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'card-spinner-app';
}
