import { Component } from '@angular/core';
import { MultiStepFormComponent } from './components/multi-step-form/multi-step-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [MultiStepFormComponent],
})
export class AppComponent {}
