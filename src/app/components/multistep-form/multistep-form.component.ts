import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';
import { MultistepFormService } from './multistep-form.service';

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
  currentStep: number | null = null;

  constructor(private _multistepFormService: MultistepFormService) {}

  ngOnInit(): void {
    this.currentStep = this._multistepFormService.currentStep;
  }
}
