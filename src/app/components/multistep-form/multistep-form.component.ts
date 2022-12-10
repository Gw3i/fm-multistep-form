import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
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
export class MultistepFormComponent implements OnInit {
  currentStep = 1;

  ngOnInit(): void {}

  changePage(isNextPage: boolean) {
    if (!isNextPage && this.currentStep > 1) {
      return this.currentStep--;
    } else {
      if ((this.currentStep === 1 && !isNextPage) || this.currentStep === 5) {
        return;
      }
      return this.currentStep++;
    }
  }
}
