import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule, StepperComponent],
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultistepFormComponent {}