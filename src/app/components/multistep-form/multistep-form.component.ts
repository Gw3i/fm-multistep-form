import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../stepper/stepper.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule, StepperComponent, ReactiveFormsModule],
  templateUrl: './multistep-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultistepFormComponent implements OnInit {
  currentStep = 1;
  lastPage = false;
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),

      arcade: new FormControl(null),
      advanced: new FormControl(null),
      pro: new FormControl(null),
      'billing-period': new FormControl('monthly'),

      'online-service': new FormControl(null),
      storage: new FormControl(null),
      'custom-profile': new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.lastPage = true;
  }

  changePage(isNextPage: boolean) {
    if (!isNextPage) {
      return this.currentStep--;
    } else {
      return this.currentStep++;
    }
  }
}
