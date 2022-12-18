import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
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
  arcadePlan = '9$/mo';
  advancedPlan = '12$/mo';
  proPlan = '15$/mo';

  @ViewChild('selectArcade')
  selectArcade!: ElementRef;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null),
      email: new FormControl(null),
      phone: new FormControl(null),

      arcade: new FormControl(null),
      advanced: new FormControl(null),
      pro: new FormControl(null),

      billingPeriod: new FormControl(false),

      'online-service': new FormControl(null),
      storage: new FormControl(null),
      'custom-profile': new FormControl(null),
    });
  }

  changeBillingPeriod() {
    let isYearly = this.form.controls['billingPeriod'].value;
    if (isYearly) {
      this.arcadePlan = '90$/yr';
      this.advancedPlan = '120$/yr';
      this.proPlan = '150$/yr';
    } else {
      this.arcadePlan = '9$/mo';
      this.advancedPlan = '12$/mo';
      this.proPlan = '15$/mo';
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
