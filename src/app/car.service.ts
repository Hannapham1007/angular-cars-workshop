import { Injectable } from '@angular/core';
import { Car } from './cars/models/car';
import { CARS } from './data/cars';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private currentId: number = 1;
  public cars: Car[] = CARS;

  public getCarById(id: number | null): Car | null {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      return null;
    }
    return car;
  }

  public getAllCars(): Car[] {
    return this.cars;
  }

  public addCar(car: Car) {
    this.cars.push(car);
  }

  public updateCar(updatedCar: Car) {
    this.cars = this.cars.map((car) =>
      car.id == updatedCar.id ? updatedCar : car
    );    
  }
}
