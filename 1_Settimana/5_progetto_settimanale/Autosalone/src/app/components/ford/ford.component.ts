import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss']
})
export class FordComponent {
  cars: Car[] = []
  fordCar: Car[] = []

  constructor() {
    this.getFord();
  }

  async getFord() {
    const response = await fetch('../../assets/db.json');
    const data: Car[] = await response.json();
    this.cars = data.filter(element => element.brand=="Ford")
  }
}
