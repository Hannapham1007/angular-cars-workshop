import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../../car.service';
import { Car } from '../models/car';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  route = inject(ActivatedRoute);
  carService = inject(CarService);
  router = inject(Router);
  carForm: FormGroup;
  id = this.route.snapshot.paramMap.get('id');

  car: Car | null = this.carService.getCarById(Number(this.id));

  constructor(private formBuilder: FormBuilder) {
    this.carForm = this.formBuilder.group({
      make: [this.car?.make, Validators.required],
      model: [this.car?.model, Validators.required],
      description: [this.car?.description, Validators.required],
    });
  }

  updateCar() {
    this.carService.updateCar({
      id: Number(this.id),
      make: this.carForm.value.make,
      model: this.carForm.value.model,
      description: this.carForm.value.description,
    });
    this.router.navigate(['cars']);
  }
}
