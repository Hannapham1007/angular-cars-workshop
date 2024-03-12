import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../../car.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  myCar: Car = {id: 1, make: '', model: '', description: ''};
  carForm: FormGroup;
  carService = inject(CarService);
  constructor(private formBuilder: FormBuilder) {
    this.carForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addCar() {
    this.myCar = {
      id: this.carService.cars.length,
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      description: this.carForm.value.description,
    };
    this.carService.addCar(this.myCar);
  }
}
