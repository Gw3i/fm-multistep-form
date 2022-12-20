import { Component } from '@angular/core';
import { MultistepFormComponent } from './components/multistep-form/multistep-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MultistepFormComponent],
})
export class AppComponent {
  title = 'fm-multistep-form';
}
