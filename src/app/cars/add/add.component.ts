import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  carForm: FormGroup;
  carService = inject(CarService);
  router = inject(Router);
  constructor(private formBuilder: FormBuilder) {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    const myCar = {
      id: this.carService.cars.length + 1,
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      description: this.carForm.value.description,
    };
    this.carService.addCar(myCar);
    this.router.navigate(["cars"])
  }
}
