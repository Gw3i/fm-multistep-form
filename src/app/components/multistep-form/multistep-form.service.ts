import { Injectable } from '@angular/core';

@Injectable()
export class MultistepFormService {
  currentStep: number | null = 1;

  steps: number[] = [1, 2, 3, 4];
}
