import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistepFormService } from '../multistep-form/multistep-form.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepperComponent implements OnInit {
  steps: number[] | null = null;

  currentStep: number | null = null;

  constructor(private _multistepFormService: MultistepFormService) {}

  ngOnInit(): void {
    this.steps = this._multistepFormService.steps;
    this.currentStep = this._multistepFormService.currentStep;
  }
}
