import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
  selector: 'app-multistep-form',
  standalone: true,
  imports: [CommonModule, StepperComponent, ReactiveFormsModule],
  templateUrl: './multistep-form.component.html',
  styleUrls: ['./multistep-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultistepFormComponent implements OnInit {
  currentStep = 2;
  lastPage = false;
  form!: FormGroup;
  billingPeriod: 'monthly' | 'yearly' = 'monthly';
  arcadePlan = 9;
  advancedPlan = 12;
  proPlan = 15;
  onlineService = 1;
  storage = 2;
  customProfile = 2;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),

      plan: new FormControl('arcade'),
      // advanced: new FormControl('advanced'),
      // pro: new FormControl('pro'),

      billingPeriod: new FormControl(false),

      onlineService: new FormControl(null),
      storage: new FormControl(null),
      customProfile: new FormControl(null),
    });
  }

  changeBillingPeriod() {
    let isYearly = this.form.controls['billingPeriod'].value;
    if (isYearly) {
      this.billingPeriod = 'yearly';
      this.arcadePlan = 90;
      this.advancedPlan = 120;
      this.proPlan = 150;
      this.onlineService = 10;
      this.storage = 20;
      this.customProfile = 20;
    } else {
      this.billingPeriod = 'monthly';
      this.arcadePlan = 9;
      this.advancedPlan = 12;
      this.proPlan = 15;
      this.onlineService = 1;
      this.storage = 2;
      this.customProfile = 2;
    }
  }

  onSubmit() {
    console.log(this.form);
    this.lastPage = true;
    console.log(this.form.controls['billing-period']);
  }

  changePage(isNextPage: boolean) {
    if (!isNextPage) {
      return this.currentStep--;
    } else {
      return this.currentStep++;
    }
  }
}
