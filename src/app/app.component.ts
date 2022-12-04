import { Component } from '@angular/core';
import { MultistepFormComponent } from './components/multistep-form/multistep-form.component';
import { MultistepFormService } from './components/multistep-form/multistep-form.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MultistepFormComponent],
  providers: [MultistepFormService],
})
export class AppComponent {
  title = 'fm-multistep-form';
}
